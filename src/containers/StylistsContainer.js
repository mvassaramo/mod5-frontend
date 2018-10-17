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
    availabilities: [],
    findByService: ""
  }


  findByService = (service) => {
    this.setState( {findByService: service })
  }


  renderStylists = stylists =>
    <div>
      <Search updateSearch={this.updateSearch}/>
      <Filter findByService={this.findByService} allStylists={this.props.stylists}/>
      {stylists.map(stylist =>
        <Stylist stylist={stylist} currentUser={this.props.currentUser}/>
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

      return searchQuery.length > 0 ? (first_name.includes(searchQuery)
        || last_name.includes(searchQuery)
        || bio.includes(searchQuery)
        || area.includes(searchQuery)) : (
          this.state.findByService.length > 0 ?
          stylist.services.map(s => s.name).includes(this.state.findByService) :
          true
        )
    })


  render () {
    const { findByService } = this.state

    return(
      <React.Fragment>
        {
          this.renderStylists(
            this.filterStylists()
          )
        }
      </React.Fragment>
    )
  }




}
