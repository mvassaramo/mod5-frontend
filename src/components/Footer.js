import React from 'react'
import { Button } from 'semantic-ui-react'


const Footer = (props) => {

  return(
      <div class="footer">
          <p> &#x2709; info@tressfree.com</p>
          <p> © COPYRIGHT 2018 BY TRESSFREE. ALL RIGHTS RESERVED </p>
          <Button circular color='gray' icon='facebook' />
          <Button circular color='white' icon='twitter' />
          <Button circular color='white' icon='linkedin' />
          <Button circular color='white' icon='google plus' />
      </div>
  )
}

export default Footer
