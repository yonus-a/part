"use client";

import Container from "../container";
import Button from "../button";
import Image from "next/image";
import Nav from "../nav/page";
import "./styles.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [classnames, setClassnames] = useState("");

  const listenScrollEvent = (event) => {
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
    <header className={classnames}>
      <Container>
        <div className="wrapper">
          <Nav />
          <Button>
            <Image src="/icons/en.png" alt="language" width={40} height={40} />
          </Button>
        </div>
      </Container>
    </header>
  );
}
