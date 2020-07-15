import {auth} from './TripyDataBase1'
import React, { Component } from 'react';
import db from './TripyDataBase1'
import firebase from './TripyDataBase1'
import SignIn from './signin';


class SignUp extends Component {
constructor(props){
    super(props);
    this.state={
        email : "",
        password: "",
        user :{}
    };
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
}
handleChange(event) {
    this.setState({[event.target.name]: event.target.value});

}
signup(event) {
    event.preventDefault();         
   auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
                    alert(res)
                }).catch((err)=>{
                    alert(err);
                })
        }



            

render(){
      return(
          <div>
        <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
        <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          
          <button onClick={this.signup}>SignUp</button>
        </div>
   
     
   );
}
}


export default SignUp;