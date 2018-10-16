import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

import LoginForm from './LoginForm'
import homepage from '../images/homepage.jpg'

export default class Header extends React.Component {


render ()  {
  return(
    <header className="homepage-header">

      {this.props.currentUser ?
        <Dropdown item text="Sign Out" onClick={this.props.signOut}></Dropdown>
      : <React.Fragment>
          <Dropdown item text="Log In"><LoginForm signIn={this.props.signIn}/></Dropdown>
        </React.Fragment>
      }
      <h1>Image Placeholder</h1>
    </header>
  )
}


}






// <Dropdown.Item><LoginForm/></Dropdown.Item>
//

// <img src={homepage} alt="home" className="homepage-img"/>
