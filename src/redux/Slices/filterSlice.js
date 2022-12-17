import {createSlice} from '@reduxjs/toolkit'

const initialState = {
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
    changeCatagery:(state,action)=>{
      state.choosenCategory=action.payload
    },
    setSearchValue:(state,action)=>{
      state.searchValue = action.payload
    },
    changeSexCategory(state,action){
      state.sexCategory = action.payload
    }
  }
})



export const {changeCatagery,setSearchValue,changeSexCategory} = filterSlice.actions;


export default filterSlice.reducer;