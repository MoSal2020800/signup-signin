import {auth} from './TripyDataBase1'
import React, { Component } from 'react';
import db from './TripyDataBase1'
import firebase from './TripyDataBase1'
import SignUp from './signup';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}
        
    }


logout(){
   auth.signOut();
}


    render(){
        return(
            <div className= "Home">
                <h1>Welcome Home!</h1>
                <button onClick={this.logout}>LogOut</button>
               
            </div>
        );
    }
}
export default Home;