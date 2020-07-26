import React from "react"
import { Link } from 'gatsby'
import { pushRotate as Menu } from "react-burger-menu"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link activeClassName="Link--is-active" className="menu-item" to="/">
        Home
      </Link>
      <Link activeClassName="Link--is-active" className="menu-item" to="/about">
        About
      </Link>
      <Link activeClassName="Link--is-active" className="menu-item" to="/work">
        Work
      </Link>
      <Link
        activeClassName="Link--is-active"
        className="menu-item"
        to="/news-events"
      >
        News &amp; Events
      </Link>
      <Link
        activeClassName="Link--is-active"
        className="menu-item"
        to="/contact"
      >
        Contact
      </Link>
    </Menu>
  )
}
