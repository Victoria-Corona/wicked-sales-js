import React from 'react';

function ProductListItem(props) {

  return (
    <div className="col-12 col-md-6 col-lg-4 pt-4 mb-4 body-text colorize">
      <div className="pointer card h-100" onClick={() => props.setView('details', { productId: props.productId })}>
        <img className="card-img-top card-image mt-4" src={props.image}></img>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">&#36;{(props.price / 100).toFixed(2)}</h6>
          <p className="body-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
