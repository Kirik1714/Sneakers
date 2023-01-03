import { PayloadAction } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit'

interface ChooseCategory{
  id:number;
  name:string;
  sortProperty:string;
}

type FilterState={
  choosenCategory:ChooseCategory;
  searchValue:string;
  sexCategory:string;
}

const initialState:FilterState = {
  choosenCategory: {
    id: 0,
    name: "популярности",
    sortProperty: "rating",
  },
  searchValue:'',
  sexCategory:'',
};


const filterSlice =createSlice({
  name:'filter',
  initialState,
  reducers:{
    changeCatagery:(state,action:PayloadAction<ChooseCategory>)=>{
      state.choosenCategory=action.payload
    },
    setSearchValue:(state,action:PayloadAction<string>)=>{
      state.searchValue = action.payload
    },
    changeSexCategory(state,action:PayloadAction<string>){
      state.sexCategory = action.payload
    }
  }
})



export const {changeCatagery,setSearchValue,changeSexCategory} = filterSlice.actions;


export default filterSlice.reducer;