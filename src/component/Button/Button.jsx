import React from 'react';
import './Button.css';
import propsTypes from 'prop-types';


const Button = (props)=>{
  const { className, text, type = 'button', onClick } = props;
  return (<button className={className} type={type} onClick={onClick}>{text}</button>)
}

Button.defaultProps = {
  type: 'button'
}

Button.propsTypes = {
  onClick: propsTypes.func.isRequired,
  className: propsTypes.string,
  text: propsTypes.string.isRequired
}

export default Button;