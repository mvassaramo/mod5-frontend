import React from 'react'

import RequestsContainer from '../containers/RequestsContainer'
import StylistsContainer from '../containers/StylistsContainer'
import MuasContainer from '../containers/MuasContainer'

export default class HomepageOptions extends React.Component {

  state = {
    optionSelected: false,
    optionChosen: undefined
  }

  handleClick = (event) => {
    this.setState({ optionSelected: true, optionChosen: event.target.value })
  }

  renderSelectedOption = () => {
    const {optionChosen} = this.state
    const {requests, stylists} = this.props

    switch(optionChosen) {
      case "requests":
        return <RequestsContainer requests={requests}/>
        break
      case "muas":
        return <MuasContainer stylists={stylists}/>
        break
      case "stylists":
        return <StylistsContainer stylists={stylists}/>
        break
    }
  }

  renderOptionButtons = () =>
    <div>
      <button className="all-requests-button" value="requests" onClick={this.handleClick}>See all Requests</button>
      <button className="all-muas-button" value="muas" onClick={this.handleClick}>See all MUAs</button>
      <button className="all-hairstylists-button" value="stylists" onClick={this.handleClick}>See all Hair Stylists</button>
    </div>



  render () {
    const {optionSelected} = this.state

    return(
      <React.Fragment>
        { optionSelected ? this.renderSelectedOption() : this.renderOptionButtons()}
      </React.Fragment>
    )
  }

}
