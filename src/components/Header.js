import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

import LoginForm from './LoginForm'
import HomePage from '../HomePage'
import headerImage from '../images/header.jpg'
import MenuDropdown from './MenuDropdown'
import SignupForm from './SignupForm'

export default class Header extends React.Component {



renderSignup = () => {
  return <SignupForm />

}

render ()  {
  return(
    <header className="homepage-header">
      <Link to='/'>Home</Link>
      <Link to='/muas'>MUAs</Link>
      <Link to='/stylists'>Stylists</Link>
      <Link to='/requests'>Requests</Link>
        <img src={headerImage} className="header-img" />

      {this.props.currentUser ?
        <Dropdown item text="Sign Out" onClick={this.props.signOut}></Dropdown>
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
