

export function Deposit(value){
    return(
        {
            type:'Deposit',
            payload: value
        }
    );
}

export function Withdrow(value){
    return({
        type: 'Withdrow',
        payload: value

    }
        

    );
}