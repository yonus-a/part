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

  const handleClick = (event: any) => {
    event.preventDefault();
    const { target } = event;
    const menu = target.nextElementSibling;
    menu.classList.toggle("show-menu");
  };

  return (
    <nav aria-label="Main Navigation" className="main-nav">
      <MobileOnly>
        <Button className="menu-cta" onClick={() => setShow(true)}>
          <Icon name="menu" />
        </Button>
        {show && (
          <div className="menu-wrapper">
            <Button className="close-menu" onClick={() => setShow(false)}>
              <Icon name="close" />
            </Button>
            <NavLinks onGeneralLinkClick={handleClick} />
          </div>
        )}
      </MobileOnly>
      <PcOnly>
        <NavLinks />
      </PcOnly>
    </nav>
  );
}
