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
    return (
      <div>
        <div>
          <h1>My Cart</h1>
          <p className="muted">Order Total:</p>
        </div>
        <form>
          <div className="form-group">
            <div className="mt-3 p-3">
              <label htmlFor="">Name</label>
              <input type="text" name="name" className="form-control" placeholder="Jane Doe"/>
            </div>
            <div className="mt-3 p-3">
              <label htmlFor="">Credit Card</label>
              <input type="text" name="creditCard" className="form-control" placeholder="0000 0000 0000 0000"/>
            </div>
            <div className="mt-3 p-3">
              <label htmlFor="">Shipping Address</label>
              <textarea type="text" name="shippingAddress" className="form-control" placeholder="Jane Doe"></textarea>
            </div>
          </div>
          <button type="button" className="btn btn-primary">Place Order</button>
        </form>
      </div>
    );
  }
}
