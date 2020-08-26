import React from 'react';

function CartSummaryItem(props) {
  const priceAdjust = <p className="muted">&#36;{(props.price / 100).toFixed(2)}</p>;
  return (
    <>
      <div className="card p-4 m-4">
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <img className="img-fluid cartPreview" src={props.img}></img>
          </div>
          <div className="col-7 m-auto">
            <div>
              <h3>{props.name}</h3>
              <div>{priceAdjust}</div>
              <div>{props.shortDesc}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSummaryItem;
