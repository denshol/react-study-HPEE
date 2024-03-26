function redecuerReducer02(state,action){
    switch(action.type){
        case "INPUT":
            return +state+parseInt(action.money);
        case "OUTPUT":
            return +state-action.money;
        default:
            return state;        
    }
}

export default redecuerReducer02;