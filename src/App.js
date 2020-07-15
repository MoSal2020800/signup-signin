import React, { Component } from 'react';
import './App.css';
import db from './TripyDataBase1'
import { auth } from './TripyDataBase1'
import SignUp from  './signup'
import Home from  './home'
import SignIn from  './signin'
import firebase from './TripyDataBase1'
import TripyDataBase1 from './TripyDataBase1'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
     this.state={
      user: {}
    }
  }
  componentDidMount(){
this.authListener();
  }
  authListener(){
auth.onAuthStateChanged((user)=>{
  if(user){
    this.setState({user})
  }else{
    this.setState({user : null})
  }
  })
}

  render(){
    return (
         <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact 
          path={"/signin"}
            <SignIn/>
          
          </Route>
          <Route exact
          path={"/signup"} 
            <SignUp/>
          
          </Route>
          <Route 
          path={"/home"}
          <Home/>
           
          
          </Route>
        </Switch>
        
      </div>
    </Router>


  // function Home() {
  //   return <h2>Home</h2>;
  // }
  
  // function SignIn() {
  //   return <h2>SignIn</h2>;
  // }
  
  // function SignUp() {
  //   return <h2>SignUp</h2>;
  // }

);
  }
 
}

export default App;
