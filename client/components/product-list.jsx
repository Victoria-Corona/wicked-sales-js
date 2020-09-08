import React from 'react';
import ProductListItem from './product-list-item';

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
    fetch('api/yarnProducts', {
      method: 'GET'
    })
      .then(res => res.json()).then(data => {
        this.setState({ products: data });
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  render() {
    let display;
    if (this.props.modal) {
      display = 'hidden';
    } else {
      display = '';
    }

    return (
      <div>
        <div className={`modal-overlay ${display}`}>
          <div className="modal-content card d-flex align-items-center">
            <p className="m-4">Before accessing this site, please be aware that
            it is solely for demonstration purpose and all personal information should
            not be used in this app.</p>
            <button className="m-2" onClick={this.props.hideModal}>ACCEPT</button>
          </div>
        </div>
        <div className="banner">
        </div>
        <div className="container">
          <div className="row">

            {
              this.state.products.map(product => {
                return <ProductListItem key={product.productId}
                  name={product.name}
                  productId={product.productId}
                  price={product.price}
                  image={product.image}
                  desc={product.shortDescription}
                  setView={this.props.setView}
                />;
              })
            }

          </div>
        </div>
      </div>
    );
  }
}
export default ProductList;
