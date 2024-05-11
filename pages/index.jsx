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
          <div className="backgroundDiv">
            <div className="wegmansWrapper navContainer">
              <Link href={"/"}>
                <a className="navLink navItemOne colorNavWhite">Home</a>
              </Link>
              <Link href={"/bside"}>
                <a className="navLink navItemTwo colorNavWhite">B-Side</a>
              </Link>
              <Link href={"/about"}>
                <a className="navLink navItemThree colorNavWhite">About</a>
              </Link>
            </div>
          </div>

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
                  and I am a Product and Systems Designer who loves untangling
                  complex information structures and put them back together
                  better than before.
                </div>

                <div className="homeButtons">
                  <a
                    href="/images/Hurley-Resume-2024.pdf"
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
