import React, { useCallback, useState } from "react";
// import Link from "gatsby-link";
import Link from "next/link";

// TODO: Check out nav shit

function Navigation() {
  return (
    <div className="wegmansWrapper navContainer">
      <Link href={"/#projects"}>
        <a className="navLink navItemOne">Home</a>
      </Link>

      <a
        href="https://www.dropbox.com/s/emz1m7f19l4mmnp/Resume2020Hurley.pdf?dl=0"
        target="_blank"
        rel="noopener noreferrer"
        className="navLink navItemTwo"
      >
        Resume
      </a>

      <Link href={"/about"}>
        <a className="navLink navItemThree">About</a>
      </Link>
    </div>
  );
}

export default Navigation;
