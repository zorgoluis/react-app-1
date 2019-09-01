import React, {Component} from 'react';
import  UserFunction from './UserFunctions';

class User extends Component{
  constructor(props){
    super(props);

    this.state = {
      users : []
    }
  }

  componentWillMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(resp=>{
      resp.json().then(response=>{
        this.setState({users : response})
      })
    })
  }

  render(){
    const {users} = this.state;
    console.log(users)
    return (
      ''
    )
  }
}


export default User;