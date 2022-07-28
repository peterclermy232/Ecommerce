const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.payload) {
        case ADDITEM:
            // CHECK if product is already exist
            const exist = state.find((item)=>item.id === product.id);
            if (exist){
                return state.map((item)=> item.id === product.id ? {...})
            }
            
            break;
    
        default:
            break;
    }

}

export default handleCart;