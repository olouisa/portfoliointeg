import {legacy_createStore as createStore} from "redux"; 
import {produce} from "immer";


const initialState = {
    // isClicked : false,
    clickValue : "Tous",
   
}

export const store = createStore(reducer, initialState);

export function reducer(state = initialState, action) {
    if(action.type === "getClickValue") {
        return produce(state, (draft) => {
            draft.clickValue = action.payload.clickValue
        })
    }

    if(action.type=== "click") {
        return produce(state, (draft) => {
            draft.isClicked = true
        })
    }


return state
}

store.subscribe(() => {
    console.log("Nouveau state:");
    console.log(store.getState());
  });