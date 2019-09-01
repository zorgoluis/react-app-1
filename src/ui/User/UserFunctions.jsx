import React, { useState, useEffect, Fragment } from 'react';
import Button from '../../component/Button/Button';

const UserFunctions = ()=>{
  const [users,setUser] = useState([]);
  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
  //     resp.json().then((response)=>{
  //       setUser(response);
  //     })
  //   })
  // },[])

  const fetchUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
      resp.json().then((response)=>{
        setUser(response);
      })
    })
  }

  return (
    <Fragment>
      <ul>
        {
          users.map((user,i)=>{
            const {name} = user;
           return <li key={i}>{name}</li>
          })
        }
      </ul>
      <Button className={"btn"} text="Load Users" onClick={fetchUser}></Button>
    </Fragment>
  );
}

export default UserFunctions;