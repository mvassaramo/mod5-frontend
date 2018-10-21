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
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Link to='/muas'><img src={makeupBrushes} className="homepage-option"/></Link><br></br>
        <Link to='/stylists'><img src={hairstudio} className="homepage-option"/></Link><br></br>
        <Link to='/requests'><img src={requestImage} className="homepage-option"/></Link>
      </React.Fragment>
    )
  }

}

//
//
