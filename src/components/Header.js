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
      <Link to='/'><button>Home</button></Link>
      <Link to='/muas'><button>MUAs</button></Link>
      <Link to='/stylists'><button>Stylists</button></Link>
      <Link to='/requests'><button>Requests</button></Link>
        <img src={headerImage} className="header-img" />

      {this.props.currentUser ?
        <div>
          {
              (this.props.currentUser.first_name) ?
                  <h3>Welcome, {this.props.currentUser.first_name}</h3>
                  : <h3>Welcome</h3>
          }
          <Link to='/newstylist'><button>Become a Stylist</button></Link>
          <Link to='/myaccount'><button>My Account</button></Link>
          <button onClick={this.props.signOut}>Sign Out</button>
        </div>
      : <React.Fragment>
          <Link to='/signin'><button>Login</button></Link>
          <Link to='/signup'><button>Sign up</button></Link>
        </React.Fragment>
      }
    </header>
  )
}


}






// <Dropdown.Item><LoginForm/></Dropdown.Item>
//

// <img src={homepage} alt="home" className="homepage-img"/>
