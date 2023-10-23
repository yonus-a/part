import Link from "next/link";
import Container from "../container";
import Icon from "@app/(persian)/components/icon";
import Image from "next/image";
import "./styles.scss";
import Logo from "../logo";
import Button from "@app/(persian)/components/button";
import MobileOnly from "@app/(persian)/components/mobile-only";
import MobileNav from "../mobile-nav";
import Dialog from "@app/(persian)/components/dialog";
import DialogCta from "@app/(persian)/components/dialog-cta";
import DialogLayer from "@app/(persian)/components/dialog-layer";
import DialogContainer from "@app/(persian)/components/dialog-container";
import PcOnly from "@app/(persian)/components/pc-only";

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Products and Services",
    href: "#",
  },
  {
    id: 3,
    name: "About company",
    href: "#",
  },
  {
    id: 4,
    name: "Contact us",
    href: "#",
  },
];

export default function Nav() {
  // const variants = {
  //   initial: {
  //     transform: "translate(100%, -100%), scale(0)",
  //   },
  //   animate: { transform: "translate(100%, -100%), scale(1)" },
  // };
  const variants = {
    initial: { x: 1000, y: -1000 },
    animate: { x: 0, y: 0 },
  };

  return (
    <nav className="en-nav" aria-label="Main Navigation">
      <Container>
        <Logo />
        <Image
          src="/images/logo-footer-white.png"
          alt=""
          width={210}
          height={50}
          className="en-logo-white"
        />
        <MobileOnly>
          <Dialog ariaLabel="mobile nav">
            <DialogCta className="menu-cta">
              <Icon name="menu" />
            </DialogCta>
            <DialogLayer>
              <DialogContainer
                transition={{ duration: 1 }}
                variants={variants}
                takeAllSpace
              >
                <DialogCta className="close-menu">
                  <Icon name="close" />
                </DialogCta>
                <MobileNav />
              </DialogContainer>
            </DialogLayer>
          </Dialog>
        </MobileOnly>
        <PcOnly>
          <div className="col-right">
            <ul role="menubar ">
              {links.map(({ id, name, href }: any) => (
                <li key={id} role="none">
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
            <Link href={"/"}>
              <Image
                src="/images/ir.png"
                alt="persian version"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </PcOnly>
      </Container>
    </nav>
  );
}
