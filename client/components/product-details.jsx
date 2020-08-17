import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`, {
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
    if (!this.state.product) {
      return null;
    } else {
      return (
        <div>
          <p>Test text</p>
        </div>
      );
    }
  }
}

export default ProductDetails;
