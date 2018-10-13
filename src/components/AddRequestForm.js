// import React from 'react'
// import {Button, Form, Header, Icon, Modal, Image} from 'semantic-ui-react'
//
//
// export default class AddRequestForm extends React.Component {
//
//   render () {
//     return(
//       <Form>
//         <Form.Field>
//           <label>Request Title</label>
//           <Form.Input
//             id='emailInput'
//             placeholder='Email'
//             margin='normal'
//             name='email'
//           />
//         </Form.Field>
//         <Form.Field>
//         <label>Password</label>
//         <Form.Input
//           id='passwordInput'
//           placeholder='Password'
//           margin='normal'
//           name='password'
//           type='password'
//         />
//         </Form.Field>
//         <Button variant='contained'>
//           Log In
//         </Button>
//       </Form>
//     )
//   }
//
//
// }


import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'



class AddRequestForm extends Component {
  state = {}

  handleSubmit= () => {

  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group>
          <Form.Field >
            <label>First Name </label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Last Name </label>
            <input />
          </Form.Field>
            <label>Request Title </label>
            <input />
        </Form.Group>
        <Form.Group inline>
          <label>Looking for...</label>
          <Form.Checkbox
            label='MUA'
            value='MUA'
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Hair Stylist'
            value='Hair Stylist'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='Description' placeholder="I'm looking for..." />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default AddRequestForm
