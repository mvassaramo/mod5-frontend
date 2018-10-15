import React from 'react'
import { Route, Link } from 'react-router-dom'

import Stylist from '../components/Stylist'
import Search from '../components/Search'
import Filter from '../components/Filter'
import StylistProfile from '../components/StylistProfile'

export default class StylistsContainer extends React.Component {

  state = {
    searchQuery: "",
    seeProfile: false,
    availabilities: []
  }

  handleClick = (stylistid) => {

  }

  renderAllStylists = () =>
    <div>
      <Search updateSearch={this.updateSearch}/> OR Search by Area
      <Filter allStylists={this.props.stylists}/>
      {this.filterStylists().map(stylist =>
        <Stylist stylist={stylist} />
      )}
    </div>


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
    const { seeProfile } = this.state

    return(
      <React.Fragment>
      {
        this.renderAllStylists()
      }

      </React.Fragment>
    )
  }




}
