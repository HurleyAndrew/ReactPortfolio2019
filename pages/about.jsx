import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Head from "next/head";

export default class About extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>About</title>
        </Head>

        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent " color={"#A2528A"} />
            <div className="homeHeroContainer wegmansWrapper whiteBg">
              <div className="aboutImageContainer"></div>
              <div className="homeTextContainer aboutContainer darkText margin-bottom">
                <div className="heyDiv darkText">Hey!</div>
                <div className="homePara">
                  Hey! My name is Andrew Hurley and I am a{" "}
                  <b>Product and Interaction Designer</b> who loves building
                  engaging and unique experiences for users.
                </div>
                <div className="homePara">
                  Creative and front end development, 3D design, electronics
                  engineering and woodworking are a few of the hobbies I really
                  enjoy when I want to create.{" "}
                </div>
                <div className="homePara">
                  But when I don’t want to make anything I love petting dogs,
                  hiking, and skiing!
                </div>
                <div className="homePara">
                  I love trying to solve any puzzles that get thrown at me or
                  that I come up with myself with the various skillset I have
                  acquired over my years in the New Media Design program at
                  Rochester Institute of Technology.
                </div>
                <div className="homePara">
                  <b> Shoot me a message!</b>
                  <br></br>
                  <a
                    href="mailto:hurleymandrew@gmail.com"
                    className="jakefrank"
                  >
                    hurleymandrew@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
