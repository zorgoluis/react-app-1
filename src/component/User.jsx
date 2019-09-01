import React, {Fragment} from 'react';

const User = (props)=>{
  const {name, age} = props;
  return <Fragment>
    <h2>name: {name}</h2>
    <h2>Age: {age}</h2>
  </Fragment>
} 

export default User;

