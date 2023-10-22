"use client";

import Container from "../container";
import Button from "../button";
import Image from "next/image";
import Nav from "../nav/page";
import "./styles.scss";
import { useState, useEffect } from "react";
import Icon from "../icon";
import Link from "next/link";

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
    <header className={classnames}>
      <Container>
        <div className="wrapper">
          <Nav />
          <div className="group">
            <Link className="login" href="/auth/signin">
              ورود
            </Link>
            <Link href="/en" className="language">
              <Icon name="language" title="language" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
