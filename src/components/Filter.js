import React from 'react'


export default class Filter extends React.Component {

  renderServiceOptions = () =>
    <select onChange={(event) => this.props.findByService(event.target.value)}>
      <option value="">Find by service</option>
      <option value="MUA">MUA</option>
      <option value="Hair Stylist">Hair Stylist</option>
    </select>

  render () {
    return(
      <React.Fragment>
        {this.renderServiceOptions()}
      </React.Fragment>
    )
  }


}
