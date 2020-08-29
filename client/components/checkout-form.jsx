import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: null,
      shippingAddress: ''
    };
  }

  render() {

    const price = this.props.cart;
    const sum = price.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

    const totalAdjust = <span>&#36;{(sum / 100).toFixed(2)}</span>;

    return (
      <div className="ml-5 container">
        <div className="pl-3 mt-3">
          <h2>My Cart</h2>
          <p className="muted mt-3">Order Total: {totalAdjust}</p>
        </div>
        <form>
          <div className="form-group">
            <div className="pl-3 mt-3">
              <label className="pl-2" htmlFor="">Name</label>
              <input type="text" name="name" className="form-control" placeholder="Jane Doe"/>
            </div>
            <div className="pl-3 mt-3">
              <label className="pl-2" htmlFor="">Credit Card</label>
              <input type="text" name="creditCard" className="form-control" placeholder="0000 0000 0000 0000"/>
            </div>
            <div className="pl-3 mt-3">
              <label className="pl-2" htmlFor="">Shipping Address</label>
              <textarea type="text" name="shippingAddress" className="form-control" placeholder="123 LearningFuze"></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p className="muted m-0 pointer pl-3" onClick={() => this.props.setView('catalog', {})}><i className="fas fa-chevron-left"></i> Back to catalog</p>
            <button type="button" className="btn btn-primary ml-3 mt-3">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}
