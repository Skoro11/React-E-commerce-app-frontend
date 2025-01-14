
import React ,{useState} from 'react';
import axios from "axios";

import './App.css';
import Navbar from './Navbar/Navbar.js';  // Import the Navbar component
import Hero from './Hero/Hero.js';
import FlashSales from "./Flash/FlashSales.js";
import Category from "./Categories/Category.js"
import BestSelling from "./BestSelling/BestSell"
import OurProducts from "./OurProducts/OurProducts.js"
import Admin from "./Admin/Admin.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginForm from './Admin/Login.js';



function App() {


  const [responseMessage, setResponseMessage] = useState('');

  // Function to handle the POST request
  const handlePostRequest = () => {
    // Make a POST request to the Spring Boot server
    axios.post('http://localhost:8080/')
      .then(response => {
        setResponseMessage(response.data); // Set the response message from the backend
      })
      .catch(error => {
        console.error('There was an error making the POST request:', error);
      });
  };

  return (

     <Router>
      <div className="App">
        
      <Navbar />
      
         <Switch>
          <Route exact path="/login/admin">
          <Admin/>  
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/login">
          <LoginForm/>  
          </Route>
        </Switch>

        <Switch>
            <Route exact path="/">
            <Hero></Hero>
      
            <FlashSales></FlashSales>
            <Category></Category>
            <BestSelling></BestSelling>
            <OurProducts></OurProducts>
            </Route>


        </Switch>   
        </div>

    </Router>  
    
  ); 
}

export default App;




