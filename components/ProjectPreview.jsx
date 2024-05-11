import React from "react";
import companyList from "../companyList.json";
import Link from "next/link";

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
    this.count = this.props.count;
  }

  render() {
    let imageURL = "./images/" + companyList.Projects[this.props.count].image;

    function createElement(prop, link, color) {
      if (prop === "internal") {
        return (
          <Link legacyBehavior href={link}>
            <a className="Button projectButton">
              <span>Check It Out</span>
            </a>
          </Link>
        );
      } else {
        return (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="Button projectButton"
          >
            <span>Check It Out</span>
          </a>
        );
      }
    }
    return (
      <div className="projectAlign">
        <div className="projectContainer wegmansWrapper">
          <div className="projectImage">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              className="projectImage"
              src={`/images/${companyList.Projects[this.props.count].image}`}
              alt={imageURL}
            />
          </div>

          <div className="projectTextContainer">
            <div className="projectDate">
              {companyList.Projects[this.props.count].date}
            </div>
            <div className="projectTitle">
              {companyList.Projects[this.props.count].title}
            </div>
            <div className="projectInfo">
              {companyList.Projects[this.props.count].info}
            </div>

            {createElement(
              companyList.Projects[this.props.count].linkType,
              companyList.Projects[this.props.count].link,
              " #" + companyList.Projects[this.props.count].color
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectPreview;
