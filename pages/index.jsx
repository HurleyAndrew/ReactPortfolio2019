import React, { Component } from "react";

import ProjectNavigation from "./../components/ProjectNavigation";
import Head from "next/head";
import Link from "next/link";
import { CommonMetaTags } from "../components/CommonMetaTags";

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>

          <CommonMetaTags />
        </Head>

        <div className="App">
          <div className="sidesContainer">
            <div className="sides">
              <Link href={"/"}>
                <div>A-Side</div>
              </Link>{" "}
              <div className="sideLine"></div>{" "}
              <Link href={"/bside"}>
                <div>B-Side</div>
              </Link>
            </div>
          </div>
          <div className="backgroundDiv"></div>
          <div className="wrapper">
            <div className="homeHeroContainer wegmansWrapper">
              <div className="mobiusHero" loading="eager"></div>

              <div className="homeTextContainer">
                <div className="heyDiv">Hey!</div>
                <div className="homePara">
                  My name is{" "}
                  <Link href={"/about"}>
                    <b className="zigzag">Andrew Hurley</b>
                  </Link>{" "}
                  and I am a <b>Product Designer</b> who loves designing{" "}
                  <b>intuitive</b> and <b>unique experiences</b> for users.
                </div>
                <div className="homePara">
                  My free time consists of activities such as <b>woodworking</b>
                  , <b>rendering</b>, <b>hiking</b>, and <b>dog petting</b>.
                </div>
                <div className="homeButtons">
                  <a href="#projects" className="Button viewProjectsButton">
                    <div>CHECK ME OUT!</div>
                  </a>
                  <a
                    href="https://www.dropbox.com/s/emz1m7f19l4mmnp/Resume2020Hurley.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Button resumeButton"
                  >
                    <div>RESUME</div>
                  </a>
                </div>
              </div>
            </div>
            <ProjectNavigation key={"projectnav1"} />
          </div>
        </div>
      </div>
    );
  }
}
