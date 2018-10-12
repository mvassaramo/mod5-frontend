import React from 'react'

import HomepageOptions from './components/HomepageOptions'
import RequestsContainer from './containers/RequestsContainer'
import MuasContainer from './containers/MuasContainer'

const API = 'http://localhost:3000/api/v1/'

export default class HomePage extends React.Component {

  state = {
    stylist_listings: [],
    requests: [],
    selected_page: undefined
  }

  selectPage = (selected_page) => this.setState({ selected_page })

  getStylists = () => {
    return fetch(`${API}/stylist_listings`)
    .then(resp => resp.json())
    .then(stylist_listings => this.setState({ stylist_listings }))
  }

  getRequests = () => {
    return fetch(`${API}/requests`)
    .then(resp => resp.json())
    .then(requests => this.setState({ requests }))
  }

  componentDidMount() {
    this.getRequests()
    this.getStylists()
  }

  render () {
    const {selected_page, requests} = this.state
    const {selectPage} = this

    return(
      <React.Fragment>
        <header className="homepage-header">
          <h1>Image Placeholder</h1>
        </header>
        {
          selected_page
          ? <RequestsContainer requests={requests}/>
          : <HomepageOptions selectPage={selectPage}/>
        }

      </React.Fragment>
    )
  }







}
