import Link from "next/link";
import Container from "../container";
import Icon from "@app/(persian)/components/icon";
import Image from "next/image";
import "./styles.scss";

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
  return (
    <nav className="en-nav" aria-label="Main Navigation">
      <Container>
        <div className="logo">
          <Icon name="logo" />
          <div className="group">
            <p className="brand">Part</p>
            <p className="slogan">Financial Data Processing Company</p>
          </div>
        </div>
        <div className="col-write">
          <ul role="menubar">
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
      </Container>
    </nav>
  );
}
