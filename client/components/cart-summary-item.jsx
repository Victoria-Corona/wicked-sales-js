import React from 'react';

function CartSummaryItem(props) {
  return (
    <>
      <div className="card p-4 m-4">
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <img className="img-fluid preview" src={props.img}></img>
          </div>
          <div className="col-7">
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>{props.shortDesc}</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default CartSummaryItem;
