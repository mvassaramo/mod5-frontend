import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'


export default class BecomeStylistForm extends React.Component {

  state = {
    bio: undefined,
    area: undefined,
    services: []
  }

  saveStylistToServer = () => {
    const {bio, area, services} = this.state
    fetch('http://localhost:3000/api/v1/stylist_listings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        first_name: this.props.currentUser.first_name,
        last_name:this.props.currentUser.last_name,
        bio: bio,
        area: area
      })
    })
      .then(resp => console.log(resp))

  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }



  render () {
    const { bio, area, services } = this.state

    return(
      <Form>
        <Form.Group>
        <Form.TextArea name='bio' label='Bio' placeholder="Tell us a bit about yourself..." onChange={this.handleChange}/>
          <Form.Field >
            <label>Area </label>
            <input name='area' value={area} onChange={this.handleChange}/>
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
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
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button onClick={this.saveStylistToServer}>Submit</Button>
      </Form>
    )
  }



}
