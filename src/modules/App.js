import { Link } from 'react-router'
import React from 'react'
import NavLink from './NavLinks'

export default React.createClass({
  render() {
    return (
      <div>
        <h1> React Router Tutorial </h1>
        <ul role='nav'>
          <li> <NavLink to='/' onlyActiveOnIndex> Home </NavLink> </li>
          <li> <NavLink to='/about' /*activeStyle={{color: 'red'}}*/ activeClassName='active'> About </NavLink> </li>
          <li> <NavLink to='/repos' /*activeStyle={{color: 'red'}}*/ activeClassName='active'> Repos </NavLink> </li>
        </ul>

        {this.props.children}

      </div>
    )
  }
})
