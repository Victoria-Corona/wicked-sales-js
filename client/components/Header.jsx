import React from 'react';

function PageTitle(props) {
  return (
    <div>
      <h4 className="title">
        <p className="titleText">
          <i className="fas fa-dollar-sign"></i> {props.text}
        </p>
      </h4>
    </div>
  );
}

export default PageTitle;
