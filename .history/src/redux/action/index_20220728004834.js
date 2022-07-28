// for add Item to cart

export const addCart = (product)=>{
    return{
        type : "ADDITEM",
        payload: product
    }

}

// FOR Delete item From Cart

export const deleteCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}