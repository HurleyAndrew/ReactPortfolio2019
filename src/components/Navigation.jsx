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
      <div
        style={{
          backgroundColor: this.props.color,
        }}
      >
        <div className="navItems">
          <div className="navLogo">AH</div>

          <Link className="navLink navItemOne" to={'/'}>
            Projects
          </Link>

          <a
            href="https://www.dropbox.com/s/emz1m7f19l4mmnp/Resume2020Hurley.pdf?dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="navLink navItemTwo"
          >
            Resume
          </a>
        </div>
      </div>
    )
  }
}

export default Navigation
