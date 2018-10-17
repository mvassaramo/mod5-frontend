import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'


const MenuDropdown = () => (
  <div>
    <Menu attached='top'>
      <Dropdown item icon='align justify' simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name='home' />
            <span className='text'>Home</span>

            <Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>All Quizzes</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>My Account</Dropdown.Header>
          <Dropdown.Item>Results</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position='right'>

      </Menu.Menu>
    </Menu>

  </div>
)

export default MenuDropdown
