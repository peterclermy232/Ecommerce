const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.payload) {
        case ADDITEM:
            // CHECK if product is already exist
            const exist = state.find((item)=>item.id === product.id);
            if (exist){
                // increase the quantity
                return state.map((item)=> item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            } else{
                const product = action.payload;
                 return [
                    ...state,
                    {
                        ...product,
                        quantity: 1, 
                    }
                 ]
            }
            
            break;
          case ""  
    
        default:
            break;
    }

}

export default handleCart;