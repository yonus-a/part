"use client";

import NavLinks from "../nav-links";
import PcOnly from "../pc-only";
import MobileOnly from "../mobile-only";
import { useState } from "react";
import Button from "../button";
import Icon from "../icon";
import "./styles.scss";
import Dialog from "../dialog";
import DialogCta from "../dialog-cta";
import DialogLayer from "../dialog-layer";
import DialogContainer from "../dialog-container";

export default function Nav() {
  const handleClick = (event: any) => {
    event.preventDefault();
    const { target } = event;
    const menu = target.closest("a").nextElementSibling;
    menu.classList.toggle("show-menu");
  };

  const variants = {
    initial: { x: 100 },
    animate: { x: 0 },
  };

  return (
    <nav aria-label="Main Navigation" className="main-nav">
      <MobileOnly>
        <Dialog ariaLabel="Main Navigation">
          <DialogCta className="menu-cta">
            <Icon name="menu" />
          </DialogCta>
          <DialogLayer>
            <DialogContainer variants={variants} takeAllSpace kickOff>
              <div className="menu-wrapper">
                <DialogCta className="close-menu">
                  <Icon name="close" />
                </DialogCta>
                <NavLinks onGeneralLinkClick={handleClick} />
              </div>
            </DialogContainer>
          </DialogLayer>
        </Dialog>
      </MobileOnly>
      <PcOnly>
        <NavLinks />
      </PcOnly>
    </nav>
  );
}
