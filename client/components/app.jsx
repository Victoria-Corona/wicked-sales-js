import React from 'react';
import PageTitle from './Header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      isAccepted: false
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  setView(name, params) {
    const newView = {
      name: name,
      params: params
    };
    this.setState({
      view: newView
    });
  }

  hideModal() {
    this.setState({
      isAccepted: true
    });
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data =>
        this.setState({
          cart: data
        }))
      .catch(err => console.error(err.message));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ cart: this.state.cart.concat(data) });
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  placeOrder(orderInfo) {

    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderInfo)
    })
      .then(res => res.json())
      .then(data => this.setState({ cart: [], view: { name: 'catalog', params: {} } }))
      .catch(err => console.error(err.message));
  }

  render() {
    let display;
    if (this.state.isAccepted) {
      display = 'hidden';
    } else {
      display = '';
    }
    const view = this.state.view.name;
    let renderPage;
    if (view === 'catalog') {
      renderPage = <ProductList setView={this.setView} />;
    } else if (view === 'details') {
      renderPage = <ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}/>;
    } else if (view === 'cart') {
      renderPage = <CartSummary cart={this.state.cart} setView={this.setView}/>;
    } else if (view === 'checkout') {
      renderPage = <CheckoutForm placeOrder={this.placeOrder} setView={this.setView} cart={this.state.cart}/>;
    }
    return (
      <>
        <div className={`modal-overlay ${display}`}>
          <div className="modal-content card d-flex align-items-center">
            <p className="m-4">
              Before accessing this site, please be aware that
              it is solely for demonstration purpose and all personal information should
              not be used in this app.
            </p>
            <button className="m-2" onClick={this.hideModal}>ACCEPT</button>
          </div>
        </div>
        <PageTitle cart={this.state.cart} setView={this.setView}/>
        {renderPage}
      </>
    );
  }
}
