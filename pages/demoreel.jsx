import React, { Component } from "react";
import { CommonMetaTags } from "../components/CommonMetaTags";

import Navigation from "../components/Navigation";
import ProjectsAdvertisement from "../components/ProjectsAdvertisement";
import Head from "next/head";

export default class DemoReel extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Demo Reel</title>
          <CommonMetaTags />
        </Head>
        <div>
          <div className="App">
            <div className="wrapper">
              <Navigation className="navComponent " color={"#A2528A"} />
            </div>
            <div className="d3designPhotoContainer">
              <video className="demoReelVideo" controls>
                <source src={"/images/DemoReel.mp4"} type="video/mp4" />
              </video>
            </div>
            <ProjectsAdvertisement />
          </div>
        </div>
      </>
    );
  }
}
