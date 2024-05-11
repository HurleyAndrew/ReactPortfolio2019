import React, { Component } from "react";

import Head from "next/head";
import Link from "next/link";

import { CommonMetaTags } from "../components/CommonMetaTags";

export default class Woodworking extends Component {
  render() {
    let color = "#00141B";
    let colorWhite = "#ffffff";

    return (
      <div>
        <Head>
          <title>Woodworking</title>

          <CommonMetaTags />
        </Head>

        <div className="App noScrollBehavior">
          <div className="sidesContainer">
            <div className="wegmansWrapper navContainer">
              <Link legacyBehavior href={"/"}>
                <a className="navLink navItemOne colorNavWhite">Home</a>
              </Link>
              <Link legacyBehavior href={"/bside"}>
                <a className="navLink navItemTwo colorNavWhite">B-Side</a>
              </Link>
              <Link legacyBehavior href={"/about"}>
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
              poster={"/images/bsidePhotos/posters/woodworking.jpg"}
            >
              <source
                src={"/images/bsidePhotos/herovideos/woodworkingHero.mp4"}
                type="video/mp4"
              />
            </video>
            <div className="wegmansHero">
              <h1
                style={{
                  color: colorWhite,
                }}
              >
                Woodworking And Everything Else
              </h1>
              <p
                style={{
                  color: colorWhite,
                }}
              >
                Where my passion for wood and electrical engineering (and
                projects that don’t really fit into their own page) lives. Some
                things end up looking great! While others serve as learning
                experiences.
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
                  Welcome to woodworking and everything else. Here you will find
                  a few different side projects of mine. Most of these were a
                  couple days long and primarily done for fun and an attempt to
                  learn how things work.
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
                    src={"/images/bsidePhotos/woodworking1.jpg"}
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
                  Too Many to Count
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Over the years I have accumulated a plethora of skills and
                  tools that are usually acquired day of to help solve a problem
                  I am facing when creating things. Lathes, sodlering irons,
                  conductive fabric, metals, led’s, sanding, planing, weaving,
                  smelting, throwing, are all in my arsenal.
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
                LIGHT PANEL
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/bsidePhotos/woodworking2.jpg"}
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
                  Just for Fun
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  This all started with an old tv that was going to be tossed.
                  When things like this happen I like to take them apart first
                  to see how they work and see if anything can be salvaged from
                  it. After doing some research on what exactly different
                  components did I settled on keeping the screen layers to do
                  something cool with it.
                </p>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The screen had a few parts, a backlight, diffusion layer,
                  polarized filter, and a fresnel layer which helps add depth to
                  the screen. Using these I wanted to make an LED panel that
                  could be changed to whatever color I wanted using some RGB LED
                  strips and it’s wireless remote.
                </p>
                <p
                  style={{
                    color: color,
                  }}
                >
                  After taking apart the layers I used the plastic screen
                  backing to mount strips of LEDs and soldered them all together
                  to make a continuous strip. After which I made a makeshift
                  frame from wood and sheet metal making sure to cover any metal
                  points as to not short it out. Unfortunatly a bolt dropped
                  ontop and shorted our some power rails leaving some strips
                  unable to reach certain colors.
                </p>
              </div>
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                BEE BOX
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/bsidePhotos/woodworking3.jpg"}
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
                  Bees, bees, bees!
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  I made a bee box. But before doin this I had an obsession with
                  what the heck bees are all about. I got so invested in
                  learning how bees worked I wanted to try out beekeeping for
                  myself. In order to do this I started by creating my own bee
                  box out of pine and mahogony. It ended up being a 2 stack 10
                  medium frame box. I sadly never got to start my own hive as
                  bee packages, which are usually required to start a hive, are
                  only sold around spring time so I never found the time to
                  start one.
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
                CUTTING BOARDS
              </div>
              <div className="rightDescriptionWhite margin-bottom ">
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/bsidePhotos/woodworking4.jpg"}
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
                  Cutting Boards Galore
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Probably one of the first things I made when I first started
                  woodworking. These were always more of a creative canvas then
                  demonstration of skill. Both design of the way the colors
                  showed and the method in which they came together was
                  important to consider in each piece. I would usually start by
                  looking at what wood I had left and lay them out next to
                  eachother to decide on colors. Sometimes certain color
                  combinations would spark some inspiration on the theme of the
                  board, such as the popsicle cutting board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
