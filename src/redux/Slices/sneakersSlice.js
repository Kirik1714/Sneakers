import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSneakers = createAsyncThunk(
    'users/fetchSneakersStatus',
    async (params) => {
        const {searchValue,choosenCategory,sexAllCategory} =params;
        const {data} = await axios.get(`http://localhost:3001/items?q=${searchValue}&_sort=${choosenCategory.sortProperty}&_order=${choosenCategory.order}${sexAllCategory}`)
        return data;
    }
  )

const initialState={
    items:[],
}

const sneakersSlice=createSlice({
    name:'sneakers',
    initialState,
    reducers:{
        setSneakers(state,action){
            state.items=action.payload
        },
    },
    extraReducers:{
        [fetchSneakers.pending]:(state,action)=>{
             console.log("Идет отправка")

        },
        [fetchSneakers.fulfilled]:(state,action)=>{
         
            console.log("Все ок")
        },
        [fetchSneakers.rejected]:(state,action)=>{
            console.log("Была ошибка");
 
        },

    }
})

export const {setSneakers} = sneakersSlice.actions

export default sneakersSlice.reducer