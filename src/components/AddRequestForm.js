import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'



class AddRequestForm extends Component {
  state = {
    first_name: undefined,
    last_name: undefined,
    title: undefined,
    description: undefined,
    date: undefined,
    time: undefined,
    other_info: undefined
  }

  saveRequestToServer = () => {
    const {first_name, last_name, title, description, date, time, other_info} = this.state
    fetch('http://localhost:3000/api/v1/requests', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: 1,
        first_name: first_name,
        last_name: last_name,
        title: title,
        description: description,
        date: date,
        time: time,
        other_info: other_info
      })
    })
      .then(resp => console.log(resp))
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

  render() {
    const { first_name, last_name, title, description, date, time } = this.state

    return (
      <Form>
        <Form.Group>
          <Form.Field >
            <label>First Name </label>
            <input name='first_name' value={first_name} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Last Name </label>
            <input name='last_name'value={last_name} onChange={this.handleChange}/>
          </Form.Field>
            <label>Post Title </label>
            <input name='title' value={title} onChange={this.handleChange}/>
          <Form.Field>
            <label>Date </label>
            <input name='date' value={date} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Time </label>
            <input name='time'value={time} onChange={this.handleChange}/>
          </Form.Field>
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
        <Form.TextArea name='description' label='Description' placeholder="I'm looking for..." onChange={this.handleChange}/>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button onClick={this.saveRequestToServer}>Submit</Button>
      </Form>
    )
  }
}

export default AddRequestForm
