import React from 'react';

function PageTitle(props) {
  let length;
  if (props.cart.length === 0) {
    length = <span> {props.cart.length} Items </span>;
  } else if (props.cart.length === 1) {
    length = <span>{props.cart.length} Item </span>;
  } else {
    length = <span>{props.cart.length} Items </span>;
  }
  return (
    <div>
      <h4 className="p-3 mb-2 bg-dark text-white d-flex justify-content-between">
        <div className="text-light m-3 p-1 d-flex align-items-center">
          <p className="m-0"><i className="fas fa-dollar-sign"></i> {props.text}</p>
        </div>
        <div className="m-3 d-flex align-items-center">
          <p className="m-0 resize" onClick={() => props.setView('cart', {})}>{length} </p><i className="fas fa-shopping-cart"></i>
        </div>
      </h4>
    </div>
  );
}

export default PageTitle;
