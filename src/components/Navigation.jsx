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
      <div className="wegmansWrapper navContainer">
        <Link className="navLink navItemOne" to={'/#projects'}>
          Work
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
    )
  }
}

export default Navigation
