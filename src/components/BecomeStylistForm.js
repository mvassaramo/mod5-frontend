import React from 'react'
import { Form, Input, Button, Dropdown } from 'semantic-ui-react'

import { areaOptions } from './AreaOptions'


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
        stylist_listing: {
          user_id: this.props.currentUser.id,
          first_name: this.props.currentUser.first_name,
          last_name:this.props.currentUser.last_name,
          services: services,
          bio: bio || '',
          area: area || ''
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.props.updateCurrentUserWithStylistListing(data)
        this.props.createNotification('newstylist')
        this.props.history.push('/mystylistprofile')
      })

  }
  handleDropdownChange = (event, { value }) => {
    console.log(event, value)
      this.setState({ area: value})
    }
  handleChange = (event) => {
    console.log(event, event.target.name, event.target.value)
      this.setState({[event.target.name]: event.target.value})
    }

  handleServiceToggle = service => {
    return event => {
      if (!this.state.services.includes(service.id)) {
        this.setState({
          services: [...this.state.services, service.id]
        })
      } else {
        this.setState({
          services: this.state.services.filter(s => s !== service.id)
        })
      }
    }
  }


  render () {
    const { bio, area, services } = this.state


    return(
      <React.Fragment>
      <br></br>
      <h2>Register as a Stylist</h2>
      <Form>
        <Form.Group>
        <Form.TextArea name='bio'
          placeholder="Tell us a bit about yourself..."
          onChange={this.handleChange}
          width={16}/>
        </Form.Group>
        <Dropdown
          placeholder='Select Area'
          fluid search selection options={areaOptions}
          onChange={this.handleDropdownChange}
          name='area'
          value={this.state.area} />
        <h4>Services:</h4><br></br>
        <Form.Group>
          {
            this.props.services.map(service =>
              <Form.Checkbox
                label={service.name}
                value={service.name}
                onChange={this.handleServiceToggle(service)}
              />
            )
          }
        </Form.Group><br></br>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
        <button className="button" onClick={this.saveStylistToServer}>Submit</button>
      </Form>



      </React.Fragment>
    )
  }



}

//
//
// <Form.Field >
//   <label>Area </label>
//   <input name='area' value={area} onChange={this.handleChange}/>
// </Form.Field><br></br>
//
