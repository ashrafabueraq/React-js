

export function CounterReducer(state = 0, action){
    console.log(action);

    switch(action.type){
        case 'Increment':
            return state + action.payload
        case 'Decrement':
            return state - action.payload  
        default:
            return state      
    }



    
}