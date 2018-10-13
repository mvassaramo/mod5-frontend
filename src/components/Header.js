import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

import LoginForm from './LoginForm'

export default class Header extends React.Component {


render ()  {
  return(
    <header className="homepage-header">

      {this.props.currentUser ?
        <Dropdown item text="My Account">
          <Dropdown.Item>Welcome, {this.props.currentUser}</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
          <Dropdown.Item>Post a request</Dropdown.Item>
          <Dropdown.Item>See My Profile</Dropdown.Item>
        </Dropdown>
      : <React.Fragment>
          <Dropdown item text="Log In"></Dropdown>
          <Dropdown item text="Sign Up"></Dropdown>
        </React.Fragment>
      }
      <h1>Image Placeholder</h1>
    </header>
  )
}



// <Dropdown.Item><LoginForm/></Dropdown.Item>
//

}
