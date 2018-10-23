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
        user_id: this.props.currentUser.id,
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
      <React.Fragment>
      <br></br>
      <h2>Request Form</h2>
      <Form>
        <Form.Group>
          <Form.Field >
            <label>First Name </label>
            <input name='first_name'
                   value={first_name}
                   onChange={this.handleChange}
                   />
          </Form.Field><br></br>
          <Form.Field>
            <label>Last Name </label>
            <input name='last_name'value={last_name} onChange={this.handleChange}/>
          </Form.Field><br></br>
            <label>Post Title </label>
            <input name='title' value={title} onChange={this.handleChange}/>
          <Form.Group inline><br></br>
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
          </Form.Group><br></br>
          <Form.Field>
            <label>Date </label>
            <input name='date' value={date} onChange={this.handleChange}/>
          </Form.Field><br></br>
          <Form.Field>
            <label>Time </label>
            <input name='time'value={time} onChange={this.handleChange}/>
          </Form.Field><br></br>
        </Form.Group>
        <Form.TextArea name='description' label='Description' placeholder="I'm looking for..." onChange={this.handleChange}/>
        <br></br>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <button className="button" onClick={this.saveRequestToServer}>Submit</button>
      </Form>
      </React.Fragment>
    )
  }
}

export default AddRequestForm
