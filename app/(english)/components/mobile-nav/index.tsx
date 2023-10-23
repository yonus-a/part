import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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

export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <div className="row wow">
        <h2>Menu</h2>
        <ul role="menubar">
          {links.map(({ id, name, href }: any) => (
            <li key={id} role="none">
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="row wow">
        <h2>Contact us</h2>
        <ul>
          <li>
            {/* logo */}
            +98 21 74318000
          </li>
          <li>
            {/* logo */}
            info@partdp.ir
          </li>
        </ul>
      </div>
      <div className="row wow">
        <h2>Social Media</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
