import React, { useCallback, useState } from "react";
import Link from "next/link";

function Navigation() {
  return (
    <div className="wegmansWrapper navContainer">
      <Link legacyBehavior href={"/"}>
        <a className="navLink navItemOne">Home</a>
      </Link>
      <Link legacyBehavior href={"/bside"}>
        <a className="navLink navItemTwo">B-Side</a>
      </Link>
      <a
        href="/images/Hurley-Resume-2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="navLink navItemThree"
      >
        Resume
      </a>
      <Link legacyBehavior href={"/about"}>
        <a className="navLink navItemFour">About</a>
      </Link>
    </div>
  );
}

export default Navigation;
