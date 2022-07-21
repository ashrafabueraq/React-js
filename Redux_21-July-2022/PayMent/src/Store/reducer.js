

export function CounterReducer(state = 0, action){
    console.log(action);

    switch(action.type){
        case 'Deposit':
            return state + action.payload // 10 + 10 = 20
        case 'Withdrow':
            return state - action.payload  // 0 - e.target.value (50) = -50
        default:
            return state      
    }



    
}