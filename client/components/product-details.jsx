import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/yarnProducts/${this.props.params.productId}`, {
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
        <div className="d-flex justify-content-center body-text">
          <div className="container card p-4 m-4">
            <div className="row">
              <div>
                <p className="muted ml-5 pointer text" onClick={() => this.props.setView('catalog', {})}><i className="fas fa-angle-double-left"></i> Back to catalog</p>
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
                <ul>
                  <li><span>Fiber&#58; </span>{this.state.product.fiber}</li>
                  <li><span>Color&#58; </span>{this.state.product.color}</li>
                  <li><span>Length&#58; </span>{this.state.product.length}</li>
                  <li><span>Care Instructions&#58; </span>{this.state.product.careInstructions}</li>
                </ul>
                <button type="button" onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>
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
