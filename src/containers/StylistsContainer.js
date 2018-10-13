import React from 'react'

import Stylist from '../components/Stylist'
import Search from '../components/Search'

export default class StylistsContainer extends React.Component {
  render () {
    return(
      <div>
        <Search/>
        {this.props.stylists.map(stylist =>
          <Stylist stylist={stylist}/>
        )}
      </div>
    )
  }




}
