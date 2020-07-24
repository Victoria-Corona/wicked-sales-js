import React from 'react';

function PageTitle(props) {
  return (
    <div>
      <i className="fa fa-usd" aria-hidden="true"></i><h1>{props.text}</h1>
    </div>
  );
}

export default PageTitle;
