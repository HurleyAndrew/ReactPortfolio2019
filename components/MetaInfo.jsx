import React from "react";
import Favicon from "../images/favicon.png";
import Social from "../images/social.jpg";
class MetaInfo extends React.Component {
  render() {
    return (
      <div>
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />

        <meta
          name="description"
          content="Portfolio Website for Andrew Hurley - Product Designer"
        />

        <meta property="og:title" content="Andrew Hurley" />
        <meta
          property="og:description"
          content="Portfolio Website for Andrew Hurley - Product Designer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Social} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="https://hurleyandrew.com/" />
        <meta property="og:url" content="https://hurleyandrew.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta itemProp="name" content="Andrew Hurley Product Designer" />
        <meta itemProp="description" content="Andrew Hurley Product Designer" />
        <meta itemProp="image" content="Andrew Hurley Product Designer" />

        <meta name="author" content="Andrew Hurley" />

        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
        <link rel="icon" href={Favicon} type="image/x-icon" />

        <title>Andrew Hurley</title>
        <link rel="icon" href={Favicon} type="image/x-icon" />
      </div>
    );
  }
}

export default MetaInfo;
