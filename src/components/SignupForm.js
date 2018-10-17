import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'


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
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }


  render () {

        const { first_name, last_name, email, contact_number, profile_image } = this.state

        return (
          <Form>
            <Form.Group>
              <Form.Field>
                <label>First Name </label>
                <input name='first_name' value={first_name} onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label>Last Name </label>
                <input name='last_name'value={last_name} onChange={this.handleChange}/>
              </Form.Field>
                <label>Email </label>
                <input name='email' value={email} onChange={this.handleChange}/>
              <Form.Field>
                <label>Contact Number </label>
                <input name='contact_number' value={contact_number} onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label>Profile Photo </label>
                <input name='Profile Image' value={profile_image} onChange={this.handleChange}/>
              </Form.Field>
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button onClick={this.createUserOnServer}>Submit</Button>
          </Form>
        )
      }

  }
