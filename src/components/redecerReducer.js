function reducerReducer(state,action){
    switch(action.type){
        case "햄버거": 
            return state=8000;
        case "감자튀김":
            return state=3000;
        case "콜라":
            return state=1500;
        default:
            return state;        
    }
}

export default reducerReducer;