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
              <div className="aboutImageContainer">
                <div className="aboutZukoImageContainer"></div>
              </div>
              <div className="homeTextContainer aboutContainer darkText margin-bottom">
                <div className="heyDiv darkText">
                  What&apos;s this guys deal?
                </div>
                <div className="homePara">
                  My name is Andrew Hurley and I am a{" "}
                  <b>Product and Systems Designer</b> who loves untangling
                  complex information structures and put them back together
                  better than before.
                </div>
                <div className="homePara">
                  My career has primarily focused on design systems, product
                  feature development and strategizing for next-gen technologies
                  like AI, AR, and web technologies.
                </div>
                <div className="homePara">
                  In my free time you can usually find me training my dog to
                  become therapy certfied, working on home renovations, or
                  watering my lemon tree.
                </div>
                <div className="homePara">
                  Any time I have left I spend working on my book series on
                  design systems. Checkout my first book on the{" "}
                  <a
                    href="/images/uds-book.pdf"
                    className="zigzag linkDisplayReset"
                    target="_blank"
                  >
                    Universal Design Systems
                  </a>{" "}
                  concept.
                </div>
                <div className="homePara">
                  If you are interested in seeing my development work you can
                  checkout my{" "}
                  <a
                    href="https://github.com/HurleyAndrew"
                    className="zigzag linkDisplayReset"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github.
                  </a>
                </div>
                <div className="homePara">
                  <b> Shoot me a message!</b>
                  <br></br>
                  <a href="mailto:hurleymandrew@gmail.com" className="jfurl">
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
