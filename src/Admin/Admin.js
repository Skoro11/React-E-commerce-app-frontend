import { useEffect,useState } from "react"
import React from "react"
import "./Admin.css"
import  ListOfProducts from "./ProductInfrastructure.js"
import { Redirect } from 'react-router-dom';
function Admin() {


  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
      // Check if the user is authenticated by checking localStorage
      const authStatus = localStorage.getItem('isAuthenticated');
      if (authStatus !== 'true') {
          setRedirectToLogin(true); // Set state to trigger redirect to login page
      }
  }, []);

  // Redirect to login if not authenticated
  if (redirectToLogin) {
      return <Redirect to="/login" />;
  }


  

    return (
      <section className="admin__panel">
    

 
    <ListOfProducts></ListOfProducts>
  

       
      </section>
    );
  }
export default Admin;