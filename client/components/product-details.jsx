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
      const priceAdjust = <p>&#36;{(this.state.product.price / 100).toFixed(2)}</p>;
      return (
        <div>
          <p>{this.state.product.name}</p>
          {priceAdjust}
          <img src={this.state.product.image}></img>
          <p>{this.state.product.shortDescription}</p>
          <p>{this.state.product.longDescription}</p>
        </div>
      );
    }
  }
}

export default ProductDetails;
