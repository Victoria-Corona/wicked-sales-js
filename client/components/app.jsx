import React from 'react';
import PageTitle from './Header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
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

  placeOrder() {
    const data = {
      name: this.state.cart.name,
      creditCard: this.state.cart.creditCard,
      shippingAddress: this.state.cart.shippingAddress
    };

    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => this.setState({ cart: [] }))
      .catch(err => console.error(err.message));
  }

  render() {
    const view = this.state.view.name;
    let renderPage;
    if (view === 'catalog') {
      renderPage = <ProductList setView={this.setView}/>;

    } else if (view === 'details') {
      renderPage = <ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}/>;
    } else if (view === 'cart') {
      renderPage = <CartSummary cart={this.state.cart} setView={this.setView}/>;
    }
    return (
      <>
        <PageTitle text="Wicked Sales" cart={this.state.cart} setView={this.setView}/>
        {renderPage}
      </>
    );
  }
}
