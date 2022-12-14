import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  choosenCategory: {
    id: 0,
    name: "популярности",
    sortProperty: "rating",
  },
  searchValue:'',
};


const filterSlice =createSlice({
  name:'filter',
  initialState,
  reducers:{
    changeCatagery:(state,action)=>{
      state.choosenCategory=action.payload
    },
    setSearchValue:(state,action)=>{
      state.searchValue = action.payload
    },
  }
})



export const {changeCatagery,setSearchValue} = filterSlice.actions;


export default filterSlice.reducer;