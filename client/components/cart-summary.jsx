import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const listOfItems = props.cart.map(item => {
    return (
      <CartSummaryItem key={item.cartItemId}
        cartItemId={item.cartItemId}/>
    );
  });
  return (
    <>
      <div>
        {listOfItems}
      hi
      </div>
    </>
  );
}

export default CartSummary;
