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
      }
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

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <PageTitle text="Wicked Sales"/>
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
