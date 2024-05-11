import React, { Component } from "react";

import Navigation from "../components/Navigation";
import Head from "next/head";
import Link from "next/link";

import { CommonMetaTags } from "../components/CommonMetaTags";

export default class Ancera extends Component {
  render() {
    let color = "#00141B";

    return (
      <div>
        <Head>
          <title>Ancera</title>

          <CommonMetaTags />
        </Head>

        <div className="App noScrollBehavior">
          <Navigation color={"#00141B"}></Navigation>
          <div className="wegmansWrapper">
            <div className="wegmansHero">
              <h3
                style={{
                  color: color,
                }}
              >
                2020-2021
              </h3>
              <h1
                style={{
                  color: color,
                }}
              >
                Ancera
              </h1>
              <p
                style={{
                  color: color,
                }}
              >
                Focused on feature creation for Ancera&apos;s biomedical
                analytics application that focused on providing farmers with
                realtime data on disease spread amongst livestock.
              </p>
              <a
                href="https://www.ancera.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="processButton">
                  <span>Company Site</span>
                </div>
              </a>
            </div>
            <img
              className="wegmanHeroImage"
              src={"/images/anceraImages/anceraHero.jpg"}
              alt="Ancera hero"
            />

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
                BRIEF
              </div>
              <div className="rightDescription">
                <p>
                  Livestock monitoring is a very complex process to wrap your
                  head around. Ignoring the medical jargon that comes with this
                  field, the steps farmers take to manually assess their animals
                  for disease is involved and complicated. But understanding
                  this was crucial to devising solutions that fit their work
                  style and needs.
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                DATA ANALYTICS
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/anceraImages/ancera-1.jpg"}
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
                  The numbers, what do they mean!
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  My work at Ancera was heavily focused on information
                  architecture and information architecture. The data that our
                  clients required was never as black and white as data
                  requirements for something like web analytics is. There is
                  always a layer of medical interpretation that goes over
                  everything. Constant communication with veterinarians,
                  clients, and development was key to fully understanding what
                  was needed.
                  <br></br>
                  <br></br>
                  Checkout the my presentation on these components.
                </p>
                <a
                  href="images/anceraImages/ancera-data-pres.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="processButton">
                    <span>Data Viz</span>
                  </div>
                </a>
                <br></br>
                <br></br>
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/anceraImages/ancera-2.jpg"}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/anceraImages/ancera-3.jpg"}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/anceraImages/ancera-4.jpg"}
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
                  At a glance
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Everything we did had to also be displayed in a digestible
                  way. I worked on creating flows and screens that provided this
                  glance as well as avenues to investigate further into the
                  data. Many iterations were needed for every single feature
                  that we needed, many hours spent whiteboarding these complex
                  architectures out to paint that clear picture.
                  <br />
                  <br />
                  Careful consideration was needed around the choice of colors
                  and indication assets to provide the proper affordance to
                  users.
                </p>
                <div className="rightDescriptionImage">
                  <img
                    src={"/images/anceraImages/ancera-5.jpg"}
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
                  My process
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  As usual my process at Ancera followed closely with my usual
                  process. Gather requirements, iterate on paper, run potential
                  solution past team, lo-fi and iterate, review again, then move
                  to hi-fi. All along the way making sure to incorporate real
                  user feedback into each step.
                  <br></br>
                  <br></br>
                  Throughout my time with Ancera I worked closely with
                  biomedical scientists, veterinarians, developers, data
                  analysts, and most importantly our direct clients. I learned
                  so much about the inner workings of farming operations and the
                  nature of disease spread amongst livestock. It was a very
                  interesting and unique design challenge to work in such a
                  niche market space. I wish I could show more of my work but
                  due to the startup nature of the company there is a lot of
                  restrictions around what I can say and show.
                </p>
              </div>
            </div>
          </div>

          <div className="leftTagContainer wegmansFullWidth">
            <div className="leftTag leftTagWithBg viewmoreProjects">
              VIEW MORE PROJECTS
            </div>
          </div>

          <div className="projectAdvertisementContainer">
            <div>
              <a href="https://www.behance.net/gallery/74068673/Chore-Management">
                <div className="advertisementItem">
                  <img
                    src={"/images/advertisement/choreAd.jpg"}
                    alt="project"
                    loading="lazy"
                    className=""
                  />
                  <p>Chore Management</p>
                </div>
              </a>
              <Link legacyBehavior href={"/d3design/"}>
                <div className="advertisementItem">
                  <img
                    src={"/images/advertisement/d3designAd.jpg"}
                    alt="project"
                    loading="lazy"
                    className=""
                  />
                  <p>3D Design</p>
                </div>
              </Link>
              <Link legacyBehavior href={"/coincare/"}>
                <div className="advertisementItem">
                  <img
                    src={"/images/advertisement/coincareAd.jpg"}
                    alt="project"
                    loading="lazy"
                    className=""
                  />
                  <p>Coin Care</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
