import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'
export default class WegmansWeatherApplication extends Component {
  render() {
    let color = '#00141B'
    return (
      <div>
        <MetaTags>
          <title>Wegmans Weather</title>
          <link rel="icon" href={Favicon} type="image/x-icon" />
        </MetaTags>
        <div className="App">
          <Navigation
            color={'#00141B'}
            page={'wegmansweatherapplication'}
          ></Navigation>
          <div className="wegmansWrapper">
            <div className="wegmansHero">
              <h3
                style={{
                  color: color,
                }}
              >
                Summer 2019
              </h3>
              <h1
                style={{
                  color: color,
                }}
              >
                Wegmans Weather App
              </h1>
              <p
                style={{
                  color: color,
                }}
              >
                I interned at Wegmans Food Market in Rochester New York over the
                Summer of 2019. Me and one other RIT design student were tasked
                with replacing their current email based notification platform
                with a better digital solution.
              </p>

              <div className="processButton">
                <a
                  href="https://www.behance.net/gallery/81917587/Wegmans-Forecast"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Process Deck</span>
                </a>
              </div>
            </div>
            <img
              className="wegmanHeroImage"
              src={require('../images/wegmansImages/wegmansProjectHero.jpg')}
              alt="wegmans hero"
            />

            <div className="wegmansBrief wegmansFullWidth">
              <div className="leftTag">BRIEF</div>
              <div className="rightDescription">
                <p>
                  Weather is a very important factor in the grocery industry.
                  Knowing the weather ahead of time to determine what to stock
                  or what percautions to take to keep customers and staff safe
                  is indespensible.
                </p>
                <p>
                  The current method of weather information distribution is
                  through mass emails containing the forcast and preparation
                  instructions for each district. It is cited as being slow,
                  tedius and inaccurate.
                </p>
                <p>
                  A digital means of communication is needed to provide realtime
                  reporting and user centric data to improve the efficiency and
                  effectiveness of weather reporting.
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg">NEEDS</div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/wegmansImages/needs.jpg')}
                    alt="project"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  What should be included?
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  For a minimal viable product at the very least the ability to
                  view regional weather reports. Going off that the next pieces
                  to add would be the ability to recieve live notifications, add
                  custom regions to a dashboard and have a radar to see current
                  weather attributes.
                </p>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Once all that is achieved, the next step would be to focus on
                  enhanching the user experience through customizations and
                  interactive features such as weather animations, news section
                  for less important information, and region re-ordering.
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg">FRAMEWORK</div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/wegmansImages/framework1.jpg')}
                    alt="project"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Using cards to create the feeling organization.
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  We wanted the users to feel as if they could quickly go
                  between regions and forecasts as to not feel bogged down by
                  all of the information available. But also lets them multitask
                  and plan between the other stores.
                </p>
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/wegmansImages/framework2.jpg')}
                    alt="project"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Using colors strictly.
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The majority of the type and UI is colorless. Any color is
                  used are to indicate severity of the weather event or the zone
                  that the event is in. The rest of the color finds its way in
                  through animations and store front photography for the region
                  cards.
                </p>
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/wegmansImages/framework3.jpg')}
                    alt="project"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Using cards to create organization.
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  We wanted the users to feel as if they could quickly go
                  between regions and forecasts as to not feel bogged down by
                  all of the information available. But also lets them multitask
                  and plan between the other stores.
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg">SITE MAP</div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/wegmansImages/siteMap.jpg')}
                    alt="project"
                  />
                </div>
              </div>
            </div>

            <div className="wegmansBrief wegmansFullWidth">
              <div className="leftTag">USER INTERFACE</div>
              <div className="rightDescription">
                <p
                  style={{
                    color: '#fff',
                  }}
                >
                  When creating the user interface we worked in Figma which lets
                  us collaboratively work on our designs in real time. This
                  helped us work synchronously and iterate quicker then other
                  options. Any complex or raster designs would be created in
                  their respective applications. This let us have a history of
                  past designs to reference and a shared style library.
                </p>
              </div>
            </div>
            {/* start of the tri image row */}
            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg">DASHBOARD</div>
            </div>
            <div className="wegmansTriRow wegmansFullWidth">
              <div className="wegmansTriItemFirst ">
                <img
                  src={require('../images/wegmansImages/dashboardTri1.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Realtime Notifications
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Users will have the option to turn on individual alerts per
                  store region to prevent too many notifications from bothering
                  them. But these alerts provide the most important information
                  to determine weather the user needs to act upon it.
                </p>
              </div>

              <div className="wegmansTriItemSecond ">
                <img
                  src={require('../images/wegmansImages/dashboardTri2.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Dashboard
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The dashboard has region cards that feature the store front
                  and the amount of weather alerts in each region.
                </p>
              </div>

              <div className="wegmansTriItemThird ">
                <img
                  src={require('../images/wegmansImages/dashboardTri3.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Region Dashboard
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Selecting a region bring up the regions dashboard providing an
                  overview for that region including alerts ranked by severity
                  and weather at a particular store.
                </p>
              </div>
            </div>

            {/* start of the tri image row */}
            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg">WEATHER CARDS</div>
            </div>
            <div className="wegmansTriRow wegmansFullWidth">
              <div className="wegmansTriItemFirst ">
                <img
                  src={require('../images/wegmansImages/dashboardTri4.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Individual Weather Events
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Each weather event gets its own card that includes store
                  breakdowns. Allowing for district managers to vew entire
                  regions and store managers to view their specific store.
                </p>
              </div>

              <div className="wegmansTriItemSecond ">
                <img
                  src={require('../images/wegmansImages/dashboardTri5.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Confidence Level
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The in-house meteorologist asked to have us include a
                  confidence level that she can adjust according to her faith in
                  her prediction. They felt it gave a good overall indicator and
                  things below a certain level would not be acted upon.
                </p>
              </div>

              <div className="wegmansTriItemThird ">
                <img
                  src={require('../images/wegmansImages/dashboardTri6.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Weather Event Information
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Each store group has information including the impact of the
                  weather, what preparation to take, and the predicted length of
                  the event.
                </p>
              </div>
            </div>

            {/* start of the tri image row */}
            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg">RADAR AND NEWS</div>
            </div>
            <div className="wegmansTriRow wegmansFullWidth">
              <div className="wegmansTriItemFirst ">
                <img
                  src={require('../images/wegmansImages/dashboardTri7.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Radar
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The radar page has each store mapped out with a dot over it
                  indicating the highest severity alert affecting that store. It
                  also has region selectors to speed up store finding and
                  weather overlays.
                </p>
              </div>

              <div className="wegmansTriItemSecond ">
                <img
                  src={require('../images/wegmansImages/dashboardTri8.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  News
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The meteorologist also wanted a news section to be able to
                  tell the users fun facts or information about the weather that
                  does not have a major role in the weather communication. But
                  can be interesting and fun to read and learn about.
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg">PROTOTYPE</div>
            </div>

            <div className="wegmansFullWidth weatherAnimationContainer">
              <video width="320" height="240" controls className="wegmansDemo">
                <source
                  src={require('../images/wegmansImages/wegmansDemo.mp4')}
                  type="video/mp4"
                ></source>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="leftTagContainer wegmansFullWidth">
            <div className="leftTag leftTagWithBg viewmoreProjects">
              MORE PROJECTS
            </div>
          </div>

          <div className="projectAdvertisementContainer">
            <div>
              <Link to={'/abcofsymbiosis/'}>
                <div className="advertisementItem">
                  <img
                    src={require('../images/advertisement/wegmansAd.jpg')}
                    alt="project"
                    className=""
                  />
                  <p>ABC's of Symbiosis</p>
                </div>
              </Link>
              <Link to={'/d3design/'}>
                <div className="advertisementItem">
                  <img
                    src={require('../images/advertisement/d3designAd.jpg')}
                    alt="project"
                    className=""
                  />
                  <p>3D Design</p>
                </div>
              </Link>
              <Link to={'/coincare/'}>
                <div className="advertisementItem">
                  <img
                    src={require('../images/advertisement/coincareAd.jpg')}
                    alt="project"
                    className=""
                  />
                  <p>Coin Care</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
