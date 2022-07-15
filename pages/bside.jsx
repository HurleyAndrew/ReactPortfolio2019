import React, { Component } from "react";

import Head from "next/head";
import Link from "next/link";
import { CommonMetaTags } from "../components/CommonMetaTags";

export default class BSide extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>B-Side</title>
          <CommonMetaTags />
        </Head>

        <div className="App">
          <div className="sidesContainer">
            <div className="sides darkText">
              <Link href={"/"}>
                <div>A-Side</div>
              </Link>{" "}
              <div className="sideLine darkBg"></div>{" "}
              <Link href={"/bside"}>
                <div>B-Side</div>
              </Link>
            </div>
          </div>

          <div className="wrapper">
            <div className="wegmansWrapper">
              <div className="wegmansHero bsideheroMargin">
                <h1>Welcome to the B-Side</h1>
                <p>
                  This is where the more programming and engineering oriented
                  side of me lives. Part hobby I have been able to implement my
                  skills into projects both personal and for school, helping
                  them go from screen to reality.
                </p>
              </div>
            </div>

            <div className="bsideProjects margin-bottom">
              <div className="rail">
                <Link href={"/threelittlepigs"}>
                  <div className="squareProject threepigs">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">Javascript</div>
                      <div className="sidebprojectTitle">Three Little Pigs</div>
                    </div>
                  </div>
                </Link>
                <Link href={"/woodworking"}>
                  <div className="squareProject woodworking">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Electronics, Woodworking, Bees
                      </div>
                      <div className="sidebprojectTitle">
                        Woodworking and Everything in Between
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/constellationbrands"}>
                  <div className="squareProject arexperience">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Node Programming, Spark AR
                      </div>
                      <div className="sidebprojectTitle">
                        Constellation Brands AR Experience
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="rail">
                <Link href={"/respirationbelt"}>
                  <div className="rectangleProject respirationbelt">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Electronics, Fabric, Creative Coding
                      </div>
                      <div className="sidebprojectTitle">
                        Respiration Belt and Kinect Visualization
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/newmediaclubsite"}>
                  <div className="squareProject nmcsite">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        React, SCSS, Gatsby
                      </div>
                      <div className="sidebprojectTitle">NMC Club Site</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
