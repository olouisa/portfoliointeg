
export const getClickValue = (value) => ({
    type: "getClickValue",
    payload: { clickValue : value }

});

export const click = () => ({
    type: "click",
    
})

export const openModal = () => ({
    type: "openModal"
})

export const changeFilterValue = (value) => ({
    type: "changeFilterValue",
    payload: { filterValue : value }

});