import React from 'react'

import Stylist from '../components/Stylist'
import Search from '../components/Search'

export default class MuasContainer extends React.Component {

  state = {
    searchQuery: ""
  }

  updateSearch = (searchQuery) => this.setState({ searchQuery })


  renderMuas = stylists =>
    <div className="stylist-list">
      <br></br>
      <h1>All Makeup Artists</h1>
      <Search updateSearch={this.updateSearch}/><br></br>
      {
        this.props.currentUser && this.props.currentUser.stylist_listing ?
        stylists
        .filter(stylistListing => stylistListing.id !== this.props.currentUser.stylist_listing.id)
        .map(stylist =>
        <Stylist stylist={stylist} currentUser={this.props.currentUser}/>
      )
      : stylists.map(stylist =>
        <Stylist stylist={stylist} currentUser={this.props.currentUser}/>
      )
    }
    </div>

    filterMuas = () =>
      this.props.stylists.filter(stylist => {
        const first_name = (stylist.first_name || '').toLowerCase()
        const last_name = (stylist.last_name || '').toLowerCase()
        const bio = stylist.bio.toLowerCase()
        const area = stylist.area.toLowerCase()
        const searchQuery = this.state.searchQuery.toLowerCase()

        return searchQuery.length > 0 ? (first_name.includes(searchQuery)
          || last_name.includes(searchQuery)
          || bio.includes(searchQuery)
          || area.includes(searchQuery)) :
            true

      })


    componentDidMount = () => {
      this.props.getStylists()
    }


  render () {
    return(
      <React.Fragment>
        {
          this.renderMuas(
            this.filterMuas()
          )
        }
      </React.Fragment>
    )
  }




}
