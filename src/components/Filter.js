import React from 'react'


export default class Filter extends React.Component {

  state = {
    areas: []
  }

  populateAreas = () => {
    this.props.allStylists.map(stylist =>
      this.setState({ areas: stylist.area })
    )
  }

  renderAreaOptions = () =>
    <select>
      <option value="">area1</option>
      <option value="">area2</option>
      <option value="">area3</option>
    </select>

  render () {
    return(
      <React.Fragment>
        {this.renderAreaOptions()}
      </React.Fragment>
    )
  }


}
