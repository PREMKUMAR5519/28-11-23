import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + state.product.price,
      };
    case 'DECREMENT':
      return {
        ...state,
        quantity: state.quantity - 1,
        total: state.total - state.product.price,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    product: {id: 1,title: 'IPHONE X',price: 25690, brand: 'Apple', des: 'hello', image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-5.jpg"},quantity: 1,total: 25690,
  },
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
  }
  return context;
};

export { CartProvider, useCart };
