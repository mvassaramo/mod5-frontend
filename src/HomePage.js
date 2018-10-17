import React from 'react'
import { Route, Link } from 'react-router-dom'



export default class HomePage extends React.Component {


  render () {

    return(
      <React.Fragment>
        <Link to='/muas'><h1>MUAs</h1></Link><br></br>
        <Link to='/stylists'><h1>Stylists</h1></Link><br></br>
        <Link to='/requests'><h1>Requests</h1></Link>
      </React.Fragment>
    )
  }

}

//
//
