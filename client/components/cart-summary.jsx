import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const listOfItems = props.cart.map(item => {
    return (
      <CartSummaryItem key={item.cartItemId}
        name={item.name}
        img={item.image}
        price={item.price}
        shortDesc={item.shortDescription}
        setView={props.setView}/>
    );
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="ml-5 mt-3 p-2">
            <p className="muted m-0 pointer" onClick={() => props.setView('catalog', {})}><i className="fas fa-chevron-left"></i> Back to catalog</p>
          </div>
        </div>
        <h2 className="pl-3 m-3">My Cart</h2>
        <div>
          {listOfItems}
        </div>
        <div>
          <p>Total</p>
        </div>
      </div>

    </>
  );
}

export default CartSummary;
