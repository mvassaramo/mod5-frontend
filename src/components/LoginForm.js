import React from 'react'
import {Button, Form, Header, Icon, Modal, Image} from 'semantic-ui-react'

export default class LoginForm extends React.Component {

  state = {
    email: undefined,
    password: "",
    modalOpen: false
  }
  //
  // handleOpen = () => this.setState({ modalOpen: true })
  //
  // handleClose = () => this.setState({ modalOpen: false })
  //
  // handleChange = (event) => {
  //   this.setState({[event.target.name]: event.target.value})
  // }

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
        <Button variant='contained'>
          Log In
        </Button>
      </Form>
    )
  }


}
