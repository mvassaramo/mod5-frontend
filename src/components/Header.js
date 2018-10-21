import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

import LoginForm from './LoginForm'
import HomePage from '../HomePage'
import headerImage from '../images/header.jpg'
import homepage from '../images/homepage.jpg'
import MenuDropdown from './MenuDropdown'
import SignupForm from './SignupForm'

export default class Header extends React.Component {



renderSignup = () => {
  return <SignupForm />

}

render ()  {
  return(
    <header className="homepage-header">
      <Link to='/'><li className="header-link">Home</li></Link>
      <Link to='/About'><li className="header-link">About</li></Link>
      <Link to='/muas'><li className="header-link">MUAs</li></Link>
      <Link to='/stylists'><li className="header-link">Stylists</li></Link>
      <Link to='/requests'><li className="header-link">Requests</li></Link>
        <img src={headerImage} className="header-img" />

      {this.props.currentUser ?
        <div>
          <li className="header-link" onClick={this.props.signOut}>Sign Out</li>
          <Link to='/myaccount'><li className="header-link">My Account</li></Link>
            { !this.props.currentUser.stylist_listing  ?
              <Link to='/newstylist'><li className="header-link">Become a Stylist</li></Link> : null
            }
        </div>
      : <React.Fragment>
          <Link to='/signup'><li className="header-link">Sign up</li></Link>
          <Link to='/signin'><li className="header-link">Login</li></Link>
        </React.Fragment>
      }
    </header>
  )
}


}






// <Dropdown.Item><LoginForm/></Dropdown.Item>
//

// <img src={homepage} alt="home" className="homepage-img"/>
