import React, { Component } from "react";

import Link from "next/link";
import Head from "next/head";
// import heroVideo from "";
import { CommonMetaTags } from "../components/CommonMetaTags";

export default class ConstellationBrands extends Component {
  render() {
    let color = "#00141B";
    let colorWhite = "#ffffff";

    return (
      <div>
        <Head>
          <title>Constellation Brands AR</title>

          <CommonMetaTags />
        </Head>

        <div className="App noScrollBehavior">
          <div className="sidesContainer">
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

          <div className="wegmansWrapper bsideProjectHeroContainer">
            <video
              className="heroTopVideoSource"
              playsInline
              autoPlay
              muted
              loop
              poster={"/images/bsidePhotos/posters/constellation.jpg"}
            >
              <source
                src={
                  "/images/bsidePhotos/herovideos/constellationbrandsHero.mp4"
                }
                type="video/mp4"
              />
            </video>
            <div className="wegmansHero ">
              <h1
                style={{
                  color: colorWhite,
                }}
              >
                Constellation Brands Augmented Reality
              </h1>
              <p
                style={{
                  color: colorWhite,
                }}
              >
                An AR experience for beer lovers to learn more about what they
                are drinking and to discover new beverages.
              </p>
            </div>
          </div>
          <div className="wegmansWrapper ">
            <div
              className="wegmansBrief wegmansFullWidth"
              style={{
                backgroundColor: color,
              }}
            >
              <div
                className="leftTag"
                style={{
                  backgroundColor: color,
                }}
              >
                WHAT{"'"}S UP
              </div>
              <div className="rightDescription">
                <p>
                  Our interactive III class was approached by Constellation
                  Brands to create an Augmented Reality experience based around
                  their line of beverages. We could choose any set of drink we
                  wanted and the deliverble could be either a motion piece or a
                  real application.
                </p>
                <p>
                  I chose to try my hands at AR and created a working puzzle
                  game centered around the user searching for various beers on a
                  deserted island. Each time they find a new beer they learn a
                  bit about it.
                </p>
              </div>
            </div>

            <div className="leftTagContainer leftTagContainerFix wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                TOOLS
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/bsidePhotos/constellationbrands1.jpg"}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Spark AR
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  I had the opportunity to utilize a few different tools to
                  bring this project to life. I had decided to try out Facebooks
                  new (at the time) application Spark AR. It is a node based
                  programming environment for creating interactive AR
                  applications for Instagram and Facebook.
                </p>
              </div>

              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/bsidePhotos/constellationbrands2.jpg"}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  3D Modeling and Animation
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The models and other assets, including animations and textures
                  were made in Cinema 4D and later imported into the
                  application. The information cards were designed in Figma.
                  Sadly lighting and life-like renders could not be imported
                  into Spark AR without extremely baking out tons of seperate
                  maps and even then the lighting would be baked in so things
                  would look very off.
                </p>
              </div>
            </div>

            <div className="leftTagContainer leftTagContainerFix wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                CHALLENGES
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/bsidePhotos/constellationbrands3.jpg"}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Node Based Programming
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  This is almost like learning a new programming language but
                  once you understand it you realize it is missing a ton of
                  functionality and customizability to make things work the way
                  you want them to.
                </p>
              </div>
            </div>

            <div className="leftTagContainer leftTagContainerFix wegmansFullWidth">
              <div className="wegmansFullWidth margin-bottom weatherAnimationContainer">
                <video
                  width="320"
                  height="240"
                  controls
                  className="wegmansDemo"
                  loading="lazy"
                >
                  <source
                    src={"/images/bsidePhotos/constellationsDemo.mp4"}
                    type="video/mp4"
                  ></source>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
