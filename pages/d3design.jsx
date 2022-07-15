import React, { Component } from "react";
import D3Photos from "../d3photos.json";
import Navigation from "../components/Navigation";
import ProjectsAdvertisement from "../components/ProjectsAdvertisement";
import ModalImage from "react-modal-image";
import Link from "next/link";
import Head from "next/head";
import { CommonMetaTags } from "../components/CommonMetaTags";

class D3design extends Component {
  createElements = () => {
    let elementArray = [];
    for (let index = 0; index < 12; index++) {
      elementArray.push(
        <div className="modalFix">
          <ModalImage
            className="D3Image"
            small={"/images/" + D3Photos.Photos[index].link}
            large={"/images/" + D3Photos.Photos[index].link}
            alt={D3Photos.Photos[index].alt}
          />
        </div>
      );
    }

    // elementArray.push(<div className="d3designDivider"></div>)

    for (let index = 12; index < 17; index++) {
      elementArray.push(
        <div className="modalFix">
          <ModalImage
            className="D3Image"
            small={"/images/" + D3Photos.Photos[index].link}
            large={"/images/" + D3Photos.Photos[index].link}
            alt={"/images/" + D3Photos.Photos[index].alt}
          />
        </div>
      );
    }

    return elementArray;
  };

  render() {
    return (
      <div>
        <Head>
          <title>3D Design</title>

          <CommonMetaTags />
        </Head>
        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent " color={"#FFAF39"} />
            {/* <div
              className="pageTitleBar"
              style={{
                backgroundColor: '#FFAF39',
              }}
            >
              <div className="pageTitle">3D Design</div>
            </div> */}
          </div>
          <div className="d3designPhotoContainer">{this.createElements()}</div>
          <ProjectsAdvertisement />

          <div className="projectAdvertisementContainer">
            <div>
              <Link href={"/abcofsymbiosis/"}>
                <div className="advertisementItem">
                  <img
                    src={"/images/advertisement/wegmansAd.jpg"}
                    alt="project"
                    className=""
                  />
                  <p>ABC{"'"}s of Symbiosis</p>
                </div>
              </Link>
              <Link href={"/d3design/"}>
                <div className="advertisementItem">
                  <img
                    src={"/images/advertisement/d3designAd.jpg"}
                    alt="project"
                  />
                  <p>3D Design</p>
                </div>
              </Link>
              <Link href={"/coincare/"}>
                <div className="advertisementItem">
                  <img
                    src={"/images/advertisement/coincareAd.jpg"}
                    alt="project"
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
export default D3design;
