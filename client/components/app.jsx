import React from 'react';
import PageTitle from './Header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <PageTitle text="Wicked Sales"/>
        <ProductList />
      </>
    );
  }
}
