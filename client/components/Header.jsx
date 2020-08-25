import React from 'react';

function PageTitle(props) {
  return (
    <div>
      <h4 className="p-3 mb-2 bg-dark text-white d-flex justify-content-between">
        <div className="text-light m-3 p-1 d-flex align-items-center">
          <p className="m-0"><i className="fas fa-dollar-sign"></i> {props.text}</p>
        </div>
        <div className="m-3 d-flex align-items-center">
          <p className="m-0" onClick={() => props.setView('cart', {})}>{props.cart.length} Items<i className="fas fa-shopping-cart"></i></p>
        </div>
      </h4>
    </div>
  );
}

export default PageTitle;
