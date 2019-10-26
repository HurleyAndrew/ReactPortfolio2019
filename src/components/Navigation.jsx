import React from 'react'
import Link from 'gatsby-link'

class Navigation extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showMenu: false,
    }

    this.showMobileNav = this.showMobileNav.bind(this)
  }

  showMobileNav = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <div>
        <div className="navItems">
          <Link className="navLink" to={'/Projects/'}>
            Projects
            <div className="navUnderline "></div>
          </Link>

          <Link className="navLink" to={'/Other/'}>
            Other
            <div className="navUnderline "></div>
          </Link>

          <Link className="navLink" to={'/About/'}>
            About <div className="navUnderline "></div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navigation
