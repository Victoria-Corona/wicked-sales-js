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

    return (
      <div>
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
