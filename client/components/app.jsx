import React from 'react';
import PageTitle from './Header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <PageTitle text="Wicked Sales" cart={this.state.cart}/>
          <ProductList setView={this.setView}/>
        </>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <>
          <PageTitle text="Wicked Sales" />
          <ProductDetails setView={this.setView} params={this.state.view.params}/>
        </>
      );
    }
  }
}
