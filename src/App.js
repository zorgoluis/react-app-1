import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import User from './component/User';
import UserFunctions from './ui/User/UserFunctions';

import Button from './component/Button/Button';

const App= ()=>{
  const [showImg, setShowImg] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {
          showImg && 
          <img src={logo} className="App-logo" alt="logo" />
        }
        <Button className="toggle-button" text="toggle" onClick={()=>setShowImg(!showImg)} />
          {
            // arreglo.map((person,i)=>{
            //   return (
            //     <User key={i} name={person.name} age={person.age} />
            //   )
            // })
            <UserFunctions />
          }
      </header>
    </div>
  );
}
export default App;
