"use client";

import { useState, useEffect } from "react";
import Nav from "../nav";
import "./styles.scss";

export default function Header() {
  const [classnames, setClassnames] = useState("");

  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 73) {
      return setClassnames("");
    } else if (window.scrollY > 70) {
      return setClassnames("white-bg");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={`en-header ${classnames}`}>
      <Nav />
    </header>
  );
}
