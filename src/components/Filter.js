import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class Filter extends React.Component {

  renderServiceOptions = () => {
    return (
      <select onChange={(event) => this.props.findByService(event.target.value)}>
        <option value="">All</option>
        {
          this.props.services.map(service =>
            <option value={service.name}>{service.name}</option>
          )
        }
      </select>
    )
  }

  render () {
    return(
      <React.Fragment>
        {this.renderServiceOptions()}
      </React.Fragment>
    )
  }


}


// <option value="">Find by service</option>
// <option value="MUA">MUA</option>
// <option value="Hair Stylist">Hair Stylist</option>
