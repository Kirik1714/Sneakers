import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    sneakers:[],
    totalPrice :0,
}


const basketSlices =createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToBasketSneakers:(state,action)=>{
            const findItem =state.sneakers.find(obj =>obj.id === action.payload.id)
            if(findItem){
                findItem.count++
            }else{

                state.sneakers.push({...action.payload,count:1});
            }
         
            state.totalPrice= state.sneakers.reduce((sum,obj)=>sum+(obj.price*obj.count),0)
        },
        addItemCount:(state,action)=>{
          state.sneakers.map((item)=> {
            if(item.id === action.payload){
                item.count++;

            }
          })
          state.totalPrice=state.sneakers.reduce((sum,obj)=>(sum+obj.price*obj.count),0)
        },
        removeItems:(state,action)=>{
            state.sneakers = state.sneakers.filter(obj =>obj.id !==action.payload)
            state.totalPrice=state.sneakers.reduce((sum,obj)=>(sum+obj.price*obj.count),0)

        },
        minusItemCount:(state,action)=>{
            state.sneakers.map((item)=> {
                if(item.id === action.payload){
                    item.count--;
    
                }
              })
            state.totalPrice=state.sneakers.reduce((sum,obj)=>(sum+obj.price*obj.count),0)

        },
    }
})

export const {addToBasketSneakers,addItemCount,removeItems,minusItemCount} = basketSlices.actions;

export default basketSlices.reducer;
