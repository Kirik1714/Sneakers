import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type FetchSneak={
    searchValue:string;
    choosenCategory:{
        sortProperty?:string;
        order?:string;
    }
    sexAllCategory:string;
}

export const fetchSneakers = createAsyncThunk(
    'users/fetchSneakersStatus',
    async (params:FetchSneak) => {
        const {searchValue,choosenCategory,sexAllCategory} =params;
        const {data} = await axios.get<SneakerState[]>(`http://localhost:3001/items?q=${searchValue}&_sort=${choosenCategory.sortProperty}&_order=${choosenCategory.order}${sexAllCategory}`)
        return data as SneakerState[];
    }
  )


  interface SneakerState{
    id: number;
    title: string;
    price: number;
    color: string;
    sex: string;
    url: string;
    rating: number;
}
type SneakItem={
    items:SneakerState[];
}
const initialState:SneakItem={
    items:[],
}
const sneakersSlice=createSlice({
    name:'sneakers',
    initialState,
    reducers:{
        setSneakers(state,action:PayloadAction<SneakerState[]>){
            state.items=action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSneakers.pending,()=>{
            console.log("Идет отправка")
            

        })
        .addCase(fetchSneakers.fulfilled,(state,action)=>{
            state.items = action.payload
            console.log("Все ок")
            
        })
        .addCase(fetchSneakers.rejected,(state,action)=>{
            console.log("Была ошибка получение кроссовок");
            
        })
    }
  
})

export const {setSneakers} = sneakersSlice.actions

export default sneakersSlice.reducer