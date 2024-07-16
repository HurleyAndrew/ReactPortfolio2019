import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Link from "next/link";
import { CommonMetaTags } from "../components/CommonMetaTags";
import GoogleAnalytics from "../components/GoogleAnalytics";
export default class BSide extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>B-Side</title>
          <CommonMetaTags />
        </Head>
        <GoogleAnalytics />
        <div className="App">
          <Navigation />
          <div className="wrapper">
            <div className="wegmansWrapper">
              <div className="wegmansHero bsideheroMargin">
                <h1>Welcome to the B-Side</h1>
                <p>
                  This is where the more programming and engineering oriented
                  side of me lives.
                </p>
              </div>
            </div>

            <div className="bsideProjects margin-bottom">
              <div className="b-rail">
                <Link legacyBehavior href={"/respirationbelt"}>
                  <div className="rectangleProject respirationbelt">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Electronics, Fabric, Creative Coding
                      </div>
                      <div className="sidebprojectTitle">
                        Oasis Interactive Experience
                      </div>
                    </div>
                  </div>
                </Link>
                <Link legacyBehavior href={"/abcofsymbiosis"}>
                  <div className="rectangleProject symbiosis">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Print, Visual Design, 3D Design
                      </div>
                      <div className="sidebprojectTitle">
                        ABC&apos;s of Symbiosis
                      </div>
                    </div>
                  </div>
                </Link>
                <Link legacyBehavior href={"/woodworking"}>
                  <div className="rectangleProject woodworking">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Woodworking, Electronics, and Fire!
                      </div>
                      <div className="sidebprojectTitle">
                        Everything Inbetween
                      </div>
                    </div>
                  </div>
                </Link>
                <Link legacyBehavior href={"/threelittlepigs"}>
                  <div className="rectangleProject threepigs">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Visual Design, Javascript
                      </div>
                      <div className="sidebprojectTitle">
                        Three Little Pigs Interactive Story
                      </div>
                    </div>
                  </div>
                </Link>
                <Link legacyBehavior href={"/constellationbrands"}>
                  <div className="rectangleProject arexperience">
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
                <Link
                  legacyBehavior
                  href={"https://amh5267.cad.rit.edu/rhythmgame/"}
                >
                  <div className="rectangleProject spacebeebop">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        P5.js, Visual Design, Web Dev
                      </div>
                      <div className="sidebprojectTitle">Space Beebop</div>
                    </div>
                  </div>
                </Link>

                <Link legacyBehavior href={"/newmediaclubsite"}>
                  <div className="rectangleProject nmcsite">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        React, SCSS, Gatsby
                      </div>
                      <div className="sidebprojectTitle">NMC Club Site</div>
                    </div>
                  </div>
                </Link>
                <Link
                  legacyBehavior
                  href={
                    "https://www.behance.net/gallery/74068673/Chore-Management"
                  }
                >
                  <div className="rectangleProject choremanage">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Big Display Design, 3D Animation
                      </div>
                      <div className="sidebprojectTitle">
                        Chore Management App
                      </div>
                    </div>
                  </div>
                </Link>
                <Link legacyBehavior href={"/d3design"}>
                  <div className="rectangleProject cinema">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Cinema 4D, Arnold, X-Particles
                      </div>
                      <div className="sidebprojectTitle">3D Design</div>
                    </div>
                  </div>
                </Link>
                <Link legacyBehavior href={"/demoreel"}>
                  <div className="rectangleProject demoreelprev">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">Everything!</div>
                      <div className="sidebprojectTitle">Demo Reel: 2019</div>
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
