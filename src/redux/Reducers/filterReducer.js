const CHANGE_SORT_TIPE ="CHANGE_SORT_TIPE";

const initialState = {
  choosenCategory: {
    id: 0,
    name: "популярности",
    sortProperty: "rating",
  },
};
export const filterReducer =(state=initialState,action) =>{
    console.log(state);
    switch(action.type){
        case CHANGE_SORT_TIPE:{
            return {...state,choosenCategory:{...action.payload}}
        }
        default:
            return state;
    }
}
export const changeCatagery =(payload) =>({type:CHANGE_SORT_TIPE,payload})