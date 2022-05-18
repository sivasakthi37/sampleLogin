import React from 'react';
import './style.css';

export const Input = (props) => {
  let { label, imputDivStyle, validation, inputCompoentStyle, ...rest } = props;

  return (
    <React.Fragment>
      <div className={'inputMain'} style={inputCompoentStyle}>
        {label && (
          <div className={'labelContainer'}>
            <label className={'label'}>{label}</label>
          </div>
        )}
        <div style={imputDivStyle}>
          <input className={'input'} {...rest} />
          {validation && (
            <React.Fragment>
              <span className={'inputv'}>
                {props.type !== 'date' && (
                  <i className="far fa-times-circle"></i>
                )}
              </span>
              <p className={'validation'}>{validation}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
