import React from 'react';
import ProductList from './product-list';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products/1', {
      method: 'GET'
    })
      .then(res => res.json()).then(data => {
        this.setState({ product: data });
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  render() {
    return (
      <ProductList />
    );
  }
}

export default ProductDetails;
