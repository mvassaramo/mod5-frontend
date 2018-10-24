import React from 'react'

import { Input, Icon } from 'semantic-ui-react'


const Search = (props) =>
  <div>
    <Input
      type="text"
      placeholder={"Search..."}
      onChange={(event) => props.updateSearch(event.target.value)}
      fluid
      icon='search'
    />
  </div>


export default Search
