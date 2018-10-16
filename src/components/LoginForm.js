import React from 'react'
import {Button, Form, Header, Icon, Modal, Image} from 'semantic-ui-react'

export default class LoginForm extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render () {
    const { email, password, showModal } = this.state
    const { handleChange } = this

    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <Form.Input
            id='emailInput'
            placeholder='Email'
            margin='normal'
            name='email'
            onChange={(e) => this.setState({email: e.target.value})}
          />
        </Form.Field>
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
        <Button variant='contained' onClick={() => this.props.signIn(this.state.email)}>
          Log In
        </Button>
      </Form>
    )
  }


}
