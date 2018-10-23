import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

import BecomeStylistForm from './BecomeStylistForm'


export default class SignupForm extends React.Component {
  state = {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    contact_number: undefined,
    profile_image: undefined
  }

  createUserOnServer = () => {
    const {first_name, last_name, email, contact_number, profile_image } = this.state
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        contact_number: contact_number,
        profile_image: profile_image
      })
    })
      .then(resp => console.log(resp))
      .then(this.props.createNotification('newsignup'))
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

  registerStylist = () => {
    return <BecomeStylistForm/>
  }


  render () {

        const { first_name, last_name, email, contact_number, profile_image } = this.state

        return (
          <React.Fragment>
          <h3>Register below!</h3>
          <Form className="form">
            <Form.Group>
              <Form.Field>
                <label>First Name </label>
                <input name='first_name' value={first_name} onChange={this.handleChange}/>
              </Form.Field><br></br>
              <Form.Field>
                <label>Last Name </label>
                <input name='last_name'value={last_name} onChange={this.handleChange}/>
              </Form.Field><br></br>
                <label>Email </label>
                <input name='email' value={email} onChange={this.handleChange}/>
                  <Form.Field>
                  <label>Password</label>
                  <Form.Input
                    id='passwordInput'
                    placeholder='Password'
                    margin='normal'
                    name='password'
                    type='password'
                  />
                  </Form.Field>
              <Form.Field><br></br>
                <label>Contact Number </label>
                <input name='contact_number' value={contact_number} onChange={this.handleChange}/>
              </Form.Field><br></br>
              <Form.Field>
                <label>Profile Photo </label>
                <input name='Profile Image' value={profile_image} onChange={this.handleChange}/>
              </Form.Field><br></br>
            </Form.Group>
            <Form.Checkbox label='Register as a Stylist' onClick={this.registerStylist}/>


            <Form.Checkbox label='I agree to the Terms and Conditions'/><br></br>
            <button className="button" onClick={this.createUserOnServer}>Submit</button>
          </Form>
          </React.Fragment>
        )
      }

  }
