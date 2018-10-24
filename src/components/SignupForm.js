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
          <React.Fragment><br></br>
          <h3>Register below!</h3>
          <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First name' type='first_name' name='first_name' value={first_name} onChange={this.handleChange} placeholder='first name'/>
                <Form.Input fluid label='Last name' type='last_name' name='last_name' value={last_name} onChange={this.handleChange} placeholder='last name'/>
            </Form.Group>
                <Form.Input fluid label='Email' type='email' name='email' value={email} onChange={this.handleChange} placeholder='email'/>
                  <label>Password</label>
                  <Form.Input
                    id='passwordInput'
                    placeholder='password'
                    margin='normal'
                    name='password'
                    type='password'
                  />
              <Form.Field>
                <label>Contact Number </label>
                <input name='contact_number' value={contact_number} onChange={this.handleChange} placeholder='contact number'/>
              </Form.Field>
              <Form.Field>
                <label>Profile Photo </label>
                <input name='Profile Image' value={profile_image} onChange={this.handleChange}/>
              </Form.Field><br></br>

            <Form.Checkbox label='Register as a Stylist' onClick={this.registerStylist}/>


            <Form.Checkbox label='I agree to the Terms and Conditions'/><br></br>
            <button className="button" onClick={this.createUserOnServer}>Submit</button>
          </Form>
          </React.Fragment>
        )
      }

  }
