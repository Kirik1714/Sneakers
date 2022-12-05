const ADD_TO_BASKET = "ADD_TO_BASKET";
const initialState ={
    sneakers:[],
    count:0,
}


export const basketReducers =(state=initialState ,action) =>{
    switch (action.type){
        case ADD_TO_BASKET:{
            return {...state ,sneakers:[...state.sneakers,action.payload],count:state.count+1};
        }

        default:
            return state;
    }
}


export const addToBasketSneakers =(payload) =>({type:ADD_TO_BASKET,payload})