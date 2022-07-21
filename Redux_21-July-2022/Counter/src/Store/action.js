

export function Increment(){
    return(
        {
            type:'Increment',
            payload: 1
        }
    );
}

export function Decrement(){
    return({
        type: 'Decrement',
        payload: 1

    }
        

    );
}