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
          <div className="navLinkItems">
            <Link className="navLink" to={'/'}>
              Projects
              <div className="navUnderline "></div>
            </Link>
            <div className=" navHover">
              <Link className=" navLink" to={'/other/'}>
                Other
                <div className="navUnderline "></div>
              </Link>
              <div className="navOptions">
                <Link to={'/woodworking/'}>
                  <div className="miniLink">Wood Working</div>
                </Link>
                <a
                  href=" http://newmediaclub.rit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="miniLink">NMC Site Design/Code</div>
                </a>

                <a
                  href="https://dansegliode.github.io/threepigs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="miniLink">Three Little Pigs</div>
                </a>
              </div>
            </div>
            <Link className="navLink" to={'/about/'}>
              Resume <div className="navUnderline "></div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
