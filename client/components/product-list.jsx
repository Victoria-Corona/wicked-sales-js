import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('api/products', {
      method: 'GET'
    })
      .then(res => res.json()).then(data => {
        this.setState({ products: data });
      })
      .catch(error => {
        console.error(error.message);
      });
  }

}
export default ProductList;
