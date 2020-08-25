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
      .then(res => res.json())
      .then(data => this.setState({ product: data }))
      .catch(error => { console.error(error.message); });
  }

  render() {
    if (!this.state.product) {
      return null;
    } else {
      const priceAdjust = <h5 className="muted">&#36;{(this.state.product.price / 100).toFixed(2)}</h5>;
      return (
        <div className="d-flex justify-content-center">
          <div className="container card p-4 m-4">
            <div className="row">
              <div>
                <p className="muted ml-5 pointer" onClick={() => this.props.setView('catalog', {})}><i className="fas fa-chevron-left"></i> Back to catalog</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <img className="img-fluid preview" src={this.state.product.image}></img>
              </div>
              <div className="col-7">
                <h3>{this.state.product.name}</h3>
                {priceAdjust}
                <p>{this.state.product.shortDescription}</p>
                <button type="button" className="btn btn-primary" onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>
              </div>
            </div>
            <div className="row p-3">
              <p>{this.state.product.longDescription}</p>
            </div>
          </div>
        </div>

      );
    }
  }
}

export default ProductDetails;
