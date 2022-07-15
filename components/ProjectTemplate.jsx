import React from 'react'

// import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
import ProjectsAdvertisement from '../components/ProjectsAdvertisement'

class ProjectTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.count = this.props.count
    this.jsonLink = this.props.jsonLink
  }

  render() {
    // let imageURL = './../images/' + data.ProjectAttributes[3].image
    let json = require('../' + this.jsonLink + '.json')
    let data = json.ProjectAttributes

    return (
      <div>
        <div className="wrapper">
          <Navigation className="navComponent " color={'#' + data[0].color} />
          <div
            className="pageTitleBar"
            style={{
              backgroundColor: '#' + data[0].color,
            }}
          >
            <div className="pageTitle">{data[0].title}</div>
          </div>
        </div>
        <div className="projectPageBackground">
          <div className="projectPageContainer">
            <div className="pageIntroRow">
              <div className="promptContainer">
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[1].title}
                </h1>
                <p>{data[1].text}</p>
                <a
                  href={data[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="processButton"
                    style={{
                      borderColor: '#' + data[0].color,
                    }}
                  >
                    <span
                      style={{
                        color: '#' + data[0].color,
                      }}
                    >
                      Process
                    </span>
                  </div>
                </a>
              </div>
              <div className="overviewContainer">
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[2].title}
                </h1>
                <p>{data[2].text}</p>

                <h3
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[2].bullet1}
                </h3>
                <h3
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[2].bullet2}
                </h3>
                <h3
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[2].bullet3}
                </h3>
              </div>
            </div>

            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="pageTriplePhotoRow">
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[3].image)}
                  alt={'./../images/' + data[3].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[3].title}
                </h1>
                <p>{data[3].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[4].image)}
                  alt={'./../images/' + data[4].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[4].title}
                </h1>
                <p>{data[4].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[5].image)}
                  alt={'./../images/' + data[5].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[5].title}
                </h1>
                <p>{data[5].text}</p>
              </div>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="leftAlignedInfoPhoto">
              <div>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[6].title}
                </h1>
                <p>{data[6].text}</p>
              </div>
              <div>
                <img
                  src={require('./../images/' + data[6].image)}
                  alt={'./../images/' + data[6].image}
                ></img>
              </div>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="fullWidthImageContainer">
              <img
                src={require('./../images/' + data[7].image)}
                alt={'./../images/' + data[7].image}
                className="fullWidthImage"
              ></img>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="pageTriplePhotoRow">
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[8].image)}
                  alt={'./../images/' + data[8].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[8].title}
                </h1>
                <p>{data[8].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[9].image)}
                  alt={'./../images/' + data[9].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[9].title}
                </h1>
                <p>{data[9].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[10].image)}
                  alt={'./../images/' + data[10].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[10].title}
                </h1>
                <p>{data[10].text}</p>
              </div>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="leftAlignedInfoPhoto">
              <div>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[11].title}
                </h1>
                <p>{data[11].text}</p>
              </div>
              <div>
                <img
                  src={require('./../images/' + data[11].image)}
                  alt={'./../images/' + data[11].image}
                ></img>
              </div>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="fullWidthImageContainer">
              <img
                src={require('./../images/' + data[12].image)}
                alt={'./../images/' + data[12].image}
                className="fullWidthImage"
              ></img>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="pageTriplePhotoRow">
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[13].image)}
                  alt={'./../images/' + data[13].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[13].title}
                </h1>
                <p>{data[13].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[14].image)}
                  alt={'./../images/' + data[14].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[14].title}
                </h1>
                <p>{data[14].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={require('./../images/' + data[15].image)}
                  alt={'./../images/' + data[15].image}
                ></img>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[15].title}
                </h1>
                <p>{data[15].text}</p>
              </div>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="leftAlignedInfoPhoto">
              <div>
                <h1
                  style={{
                    color: '#' + data[0].color,
                  }}
                >
                  {data[16].title}
                </h1>
                <p>{data[16].text}</p>
              </div>
              <div>
                <img
                  src={require('./../images/' + data[16].image)}
                  alt={'./../images/' + data[16].image}
                ></img>
              </div>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <div className="fullWidthImageContainer">
              <img
                src={require('./../images/' + data[17].image)}
                alt={'./../images/' + data[17].image}
                className="fullWidthImage"
              ></img>
            </div>
            <div className="pageDividerLineContainer">
              <div
                className="dividerLine"
                style={{
                  borderColor: '#' + data[0].color,
                }}
              ></div>
            </div>

            <ProjectsAdvertisement />
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectTemplate
