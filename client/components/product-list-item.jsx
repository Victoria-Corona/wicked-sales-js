import React from 'react';

function ProductListItem(props) {

  return (
    <div className="col-6 col-sm-4 p-3">
      <div className="card h-100 pointer" onClick={() => props.setView('details', { productId: props.productId })}>
        <img className="card-img-top card-image" src={props.image}></img>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">&#36;{(props.price / 100).toFixed(2)}</h6>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
