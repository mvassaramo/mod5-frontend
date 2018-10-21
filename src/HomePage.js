import React from 'react'
import { Route, Link } from 'react-router-dom'

import hair from './images/hair.jpeg'
import makeupBrushes from './images/makeupBrushes.jpg'
import hairstudio from './images/hairstudio.jpg'
import requestImage from './images/requestImage.jpg'


export default class HomePage extends React.Component {


  render () {

    return(
      <React.Fragment>
        <br></br>
        <Link to='/muas'><button className="homepage-option">Makeup Artists</button></Link>
        <Link to='/stylists'><button className="homepage-option">Stylists</button></Link>
        <Link to='/requests'><button className="homepage-option">Requests</button></Link>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </React.Fragment>
    )
  }

}

//
//        <br></br><br></br><br></br><br></br><br></br><br></br>
