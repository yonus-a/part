"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.scss";
import Icon from "../icon";
import { signOut } from "next-auth/react";
import Button from "../button";
import Lottie from "lottie-react";
import SettingAnimation from "@public/animation/settings.json";

const links = [
  {
    id: 1,
    name: "صفحه اصلی",
    href: "#",
    subLinks: [
      {
        id: 1,
        name: "منوی اصلی",
        href: "#",
      },
      {
        id: 2,
        name: "معرفی شرکت",
        href: "/admin/update-about",
      },
      {
        id: 3,
        name: "خدمات",
        href: "/admin/update-services",
      },
      {
        id: 4,
        name: "مجور ها و افتخارات",
        href: "#",
      },
      {
        id: 5,
        name: "فوتر",
        href: "/admin/update-footer",
      },
    ],
  },
  {
    id: 2,
    name: "تیکت ها",
    href: "#",
  },
  {
    id: 3,
    name: "گزارشات",
    href: "#",
  },
  {
    id: 4,
    name: "خطاها",
    href: "#",
  },
  {
    id: 4,
    name: "اضافه کردن کاربر",
    href: "#",
  },
  {
    id: 5,
    name: "تنظیمات",
    href: "#",
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  const handleClick = (event: any) => {
    const { target } = event;
    const menu = target.closest("a").nextElementSibling;

    if (menu) {
      menu.classList.toggle("show-submenu");
    }
  };

  return (
    <nav className="admin-nav">
      <div className="animation">
        <Lottie animationData={SettingAnimation} loop={true} />
      </div>
      <ul className="menu">
        {links.map(({ id, name, href, subLinks }: any) => {
          const activeClass = pathname === href ? "active" : "";

          return (
            <li key={id}>
              <Link href={href} className={activeClass} onClick={handleClick}>
                {name}
                {subLinks && <Icon name="chevron-down" />}
              </Link>
              {subLinks && (
                <ul className="submenu">
                  {subLinks.map(({ id, name, href }: any) => (
                    <li key={id}>
                      <Link href={href}>{name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Button className="signout" onClick={() => signOut({ callbackUrl: "/" })}>
        <Icon name="signout" />
        خروج
      </Button>
    </nav>
  );
}
