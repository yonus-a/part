"use client";

import NavLinks from "../nav-links";
import PcOnly from "../pc-only";
import MobileOnly from "../mobile-only";
import { useState } from "react";
import Button from "../button";
import Icon from "../icon";
import "./styles.scss";

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <nav aria-label="Main Navigation" className="main-nav">
      <MobileOnly>
        <Button className="menu-cta" onClick={() => setShow(true)}>
          <Icon name="menu" />
        </Button>
        {show && (
          <div className="menu-wrapper">
            <Button onClick={() => setShow(false)}>
              <Icon name="close" />
            </Button>
            <NavLinks />
          </div>
        )}
      </MobileOnly>
      <PcOnly>
        <NavLinks />
      </PcOnly>
    </nav>
  );
}
