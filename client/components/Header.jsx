import React from 'react';

function PageTitle(props) {
  let length;
  if (props.cart.length === 0) {
    length = <h2 className="m-0"> {props.cart.length} Items </h2>;
  } else if (props.cart.length === 1) {
    length = <h2 className="m-0">{props.cart.length} Item </h2>;
  } else {
    length = <h2 className="m-0">{props.cart.length} Items </h2>;
  }
  return (
    <div>
      <h4 className="pt-3 m-0 background-header text-white d-flex justify-content-between">
        <div className="text-light m-3 p-1 d-flex align-items-center">
          <h1 className="m-0 header-info">Yarn<img className="icon" src="/images/yarn_icon_trans.png"></img>Over</h1>
        </div>
        <div className="m-3 d-flex align-items-center">
          <span className="m-0 pointer" onClick={() => props.setView('cart', {})}>{length}</span><i className="m-2 fas fa-shopping-basket fa-lg"></i>
        </div>
      </h4>
    </div>
  );
}

export default PageTitle;
