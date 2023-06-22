import {legacy_createStore as createStore} from "redux"; 
import {produce} from "immer";


const initialState = {
    isClicked : false,
    clickValue : null,
    isOpened: false,
    filterValue: "Tous"
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
if(action.type==="openModal") {
    return produce(state, (draft) => {
        draft.isOpened = !draft.isOpened
    })
}

    if(action.type === "changeFilterValue") {
        return produce(state, (draft) => {
            draft.filterValue = action.payload.filterValue
        })
    }
return state
}

store.subscribe(() => {
    console.log("Nouveau state:");
    console.log(store.getState());
  });