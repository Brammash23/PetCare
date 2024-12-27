import React from 'react'
import axios from 'axios'

export const Account = () => {

    axios.get("http://localhost:8081/account", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('email')}`  // sending email as token or header
        }
      })
      .then(response => {
     // Handle the response data
      })
      .catch(error => {
        console.error("Error:", error);  // Handle the error
      });
  return (
    <>
   
    </>
  )
}
