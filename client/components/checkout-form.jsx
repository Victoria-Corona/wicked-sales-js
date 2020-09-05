import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const nameTarget = event.target.name;
    const valueTarget = event.target.value;
    this.setState({
      [nameTarget]: valueTarget
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const orderInfo = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(orderInfo);
    this.setState({ name: '', creditCard: '', shippingAddress: '' });
  }

  render() {
    const price = this.props.cart;
    const sum = price.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

    const totalAdjust = <span>&#36;{(sum / 100).toFixed(2)}</span>;

    return (
      <div className="mt-5 container body-text">
        <div className="pl-3 mt-3">
          <h2>My Cart</h2>
          <p className="muted mt-3">Order Total: {totalAdjust}</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="pl-3 mt-3">
              <label className="pl-2" htmlFor="">Name</label>
              <input type="text" name="name" className="form-control" placeholder="Jane Doe" onChange={this.handleInputChange}/>
            </div>
            <div className="pl-3 mt-3">
              <label className="pl-2" htmlFor="">Credit Card</label>
              <input type="text" name="creditCard" className="form-control" placeholder="0000 0000 0000 0000" onChange={this.handleInputChange}/>
            </div>
            <div className="pl-3 mt-3">
              <label className="pl-2" htmlFor="">Shipping Address</label>
              <textarea type="text" name="shippingAddress" className="form-control" placeholder="123 LearningFuze" onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <p className="muted m-0 pointer pl-3 text" onClick={() => this.props.setView('catalog', {})}><i className="fas fa-angle-double-left"></i> Continue Shopping</p>
            <button type="submit">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}
