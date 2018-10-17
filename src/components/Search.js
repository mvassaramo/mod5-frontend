import React from 'react'

import { Input, Icon } from 'semantic-ui-react'


const Search = (props) =>
  <div className="ui fluid icon input">
    <Input
      type="text"
      placeholder={"Search..."}
      onChange={(event) => props.updateSearch(event.target.value)}
    />
      <i className="circular search link icon"></i>
  </div>


export default Search
