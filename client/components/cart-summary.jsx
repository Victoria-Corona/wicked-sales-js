import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {

    const price = this.props.cart;
    const sum = price.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

    const totalAdjust = <span>&#36;{(sum / 100).toFixed(2)}</span>;

    const listOfItems = this.props.cart.map(item => {
      return (
        <CartSummaryItem key={item.cartItemId}
          name={item.name}
          img={item.image}
          price={item.price}
          shortDesc={item.shortDescription}
          setView={this.props.setView}/>
      );
    });

    if (this.props.cart.length === 0) {
      return (
        <div className="card p-4 m-4 body-text">
          <div className="m-auto">
            <div className="m-4">Your Shopping Cart Is Empty!</div>
            <div className="d-flex justify-content-center">
              <p className="muted m-4 pointer" onClick={() => this.props.setView('catalog', {})}><i className="fas fa-angle-double-left"></i> Continue Shopping</p>
            </div>
          </div>
        </div>

      );
    } else {
      return (
        <>
          <div className="container body-text">
            <div className="row">
              <div className="ml-5 mt-3">
                <p className="muted m-0 pointer text" onClick={() => this.props.setView('catalog', {})}><i className="fas fa-angle-double-left"></i> Back to catalog</p>
              </div>
            </div>
            <h2 className="pl-3 m-3">My Cart</h2>
            <div>
              {listOfItems}
            </div>
            <div className="p-3 m-3 d-flex justify-content-between">
              <h4>Total Price&#58; {totalAdjust}</h4>
              <button type="button" onClick={() => this.props.setView('checkout', {})}>Checkout</button>
            </div>

          </div>

        </>
      );
    }
  }
}

export default CartSummary;
