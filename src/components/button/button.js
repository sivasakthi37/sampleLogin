import React from 'react';
import './style.css';

export const Button = (props) => {
  let { label, componentStyle, type, ...rest } = props;
  return (
    <React.Fragment>
      <div className={'buttonMain'} style={componentStyle}>
        <button type={type ? type : 'button'} {...rest}>
          {label}
        </button>
      </div>
    </React.Fragment>
  );
};
