import React from 'react'

import Stylist from '../components/Stylist'
import Search from '../components/Search'
import StylistAvailability from '../components/StylistAvailability'

export default class StylistsContainer extends React.Component {

  state = {
    searchQuery: "",
    seeAvailability: false,
    selectedStylist: undefined
  }

  handleClick = (event) => {
    this.showAvailability()
    console.log(event.target)
  }
  renderSelectedAvailability = () => <StylistAvailability stylist={this.state.selectedStylist}/>

  renderAllStylists = () =>
    <div>
      <Search updateSearch={this.updateSearch}/>
      {this.filterStylists().map(stylist =>
        <Stylist stylist={stylist} handleClick={this.handleClick}/>
      )}
    </div>

  showAvailability = () => this.setState({ seeAvailability: true })

  updateSearch = (searchQuery) => this.setState({ searchQuery })

  filterStylists = () =>
    this.props.stylists.filter(stylist => {
      const first_name = stylist.first_name.toLowerCase()
      const last_name = stylist.last_name.toLowerCase()
      const bio = stylist.bio.toLowerCase()
      const area = stylist.area.toLowerCase()
      const searchQuery = this.state.searchQuery.toLowerCase()

      return first_name.includes(searchQuery)
        || last_name.includes(searchQuery)
        || bio.includes(searchQuery)
        || area.includes(searchQuery)
    })


  render () {
    const { seeAvailability } = this.state

    return(
      <React.Fragment>
      {
        seeAvailability ? this.renderSelectedAvailability() : this.renderAllStylists()
      }
      </React.Fragment>
    )
  }




}
