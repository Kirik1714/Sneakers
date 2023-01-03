import {createSlice, PayloadAction} from '@reduxjs/toolkit'


export type CartItem={
    url:string;
    title:string;
    price:number;
    id:number;
    count:number;
}

interface BasketSlices{
    totalPrice:number,
    sneakers:CartItem[];
}

const initialState:BasketSlices ={
    sneakers:[],
    totalPrice :0,
}


const basketSlices =createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToBasketSneakers:(state,action:PayloadAction<CartItem>)=>{
            const findItem =state.sneakers.find(obj =>obj.id === action.payload.id)
            if(findItem){
                findItem.count++
            }else{

             state.sneakers.push({...action.payload,count:1});
            }
         
            state.totalPrice= state.sneakers.reduce((sum,obj)=>sum+(obj.price*obj.count),0)
        },
        addItemCount:(state,action:PayloadAction<number>)=>{
          state.sneakers.map((item)=> {
            if(item.id === action.payload){
                item.count++;

            }
          })
          state.totalPrice=state.sneakers.reduce((sum,obj)=>(sum+obj.price*obj.count),0)
        },
        removeItems:(state,action:PayloadAction<number>)=>{
            state.sneakers = state.sneakers.filter(obj =>obj.id !==action.payload)
            state.totalPrice=state.sneakers.reduce((sum,obj)=>(sum+obj.price*obj.count),0)

        },
        minusItemCount:(state,action:PayloadAction<number>)=>{
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
