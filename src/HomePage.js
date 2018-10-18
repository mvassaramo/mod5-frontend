import React from 'react'
import { Route, Link } from 'react-router-dom'

import hair from './images/hair.jpeg'
import makeupBrushes from './images/makeupBrushes.jpg'



export default class HomePage extends React.Component {


  render () {

    return(
      <React.Fragment>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Link to='/muas'><img src={makeupBrushes} className="homepage-mua-img"/></Link><br></br>
        <Link to='/stylists'><button className="homepage-option"><h1>Stylists</h1></button></Link><br></br>
        <Link to='/requests'><button className="homepage-option"><h1>Requests</h1></button></Link>
      </React.Fragment>
    )
  }

}

//
//
