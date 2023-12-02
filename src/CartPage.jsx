import React from 'react';
import { useCart } from './CartContext'
import './App.css'
const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    if (cart.quantity > 1) {
      dispatch({ type: 'DECREMENT' });
    }
  };

  return (
    <div>
      <div className='top'>SHOP-CART</div>
      <div id='container' className="card mb-3" style={{maxwidth: '540px'}}>
  <div id='concy' className="row g-0">
    <div className="col-md-4">
      <img id='imagee' src={cart.product.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div id='clsbdy'lassName="card-body">
        <h5 className="card-title">{cart.product.title}</h5>
        
        <h3 className="card-title">{cart.product.brand}</h3>
        <h3 className="card-title">Rs.{cart.product.price}</h3>
        <p className="card-text">An apple mobile which is nothing like apple</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <div className='btndiv'>
        <button className='three' onClick={handleDecrement}>-</button>
        <p className='two'>{cart.quantity}</p>
        <button className='one' onClick={handleIncrement}>+</button>
      </div>
      <div>
        <p className='total'>Total: Rs.{cart.total}</p>
      </div>
      </div>
    </div>
  </div>
</div>

      
     

    </div>
  );
};

export default Cart;
