import React from 'react';

function PageTitle(props) {
  return (
    <div>
      <h4 className="p-3 mb-2 bg-dark text-white">
        <p className="text-light m-3 p-1">
          <i className="fas fa-dollar-sign"></i> {props.text}
        </p>
      </h4>
    </div>
  );
}

export default PageTitle;
