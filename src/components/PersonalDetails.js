import React from 'react'


const PersonalDetails = (props) =>
  <div>
    <h4>First name: {props.currentUser.first_name}</h4>
    <h4>Last name: {props.currentUser.last_name}</h4>
    <h4>Email address: {props.currentUser.email}</h4>
    <h4>Contact number: {props.currentUser.contact_number}</h4>
    <button className="button">Edit</button>
  </div>


export default PersonalDetails
