import {auth} from './TripyDataBase1'
import React, { Component } from 'react';
import db from './TripyDataBase1'
import { render } from '@testing-library/react';
import firebase from './TripyDataBase1'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signin = this.signin.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    signin(event) {
        event.preventDefault();         
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
                        alert(res)
                    }).catch((err)=>{
                        alert(err);
                    })
            }

            
handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
}

    render(){
        return (
          <div>
          <input
            id="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
        <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.signin}>SignIn</button>
          
          
          </div>
        );
      }
}


export default SignIn;
