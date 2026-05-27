
import {createStore} from 'redux';

let initial = {
    sum:1000
}
function reduce(state=initial,Actions){
    switch (Actions.type) {
        case "a":
            return {...state,sum:state.sum+1}
            break;
         case "b":
            return {...state,sum:state.sum-1}
            break;
        default:  
            return state
            
    }
}

export let store = createStore(reduce)