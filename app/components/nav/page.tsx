"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const links = [
  {
    id: 1,
    name: "محصولات",
    href: "#",
    subLinks: [
      {
        id: 1,
        name: "سامانه سیگنال",
        href: "#",
      },
      {
        id: 2,
        name: "سامانه رسام",
        href: "#",
      },
      {
        id: 3,
        name: "سامانه ثبت بار",
        href: "#",
      },
      {
        id: 4,
        name: "سامانه مرآت",
        href: "#",
      },
      {
        id: 5,
        name: "سامانه فراشناسا",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    name: "خدمات",
    href: "#",
    subLinks: [
      {
        id: 1,
        name: "صندوق سرمایه‌گذاری جسورانه پارتیان",
        href: "#",
      },
      {
        id: 2,
        name: "آکادمی هوش مالی",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    name: "مجوز ها",
    href: "#",
    subLinks: [
      {
        id: 1,
        name: "پردازش اطلاعات مالی",
        href: "#",
      },
      {
        id: 2,
        name: "مشاوره سرمایه‌گذاری",
        href: "#",
      },
      {
        id: 3,
        name: "مشاوره عرضه",
        href: "#",
      },
      {
        id: 4,
        name: "مشاوره پذیرش",
        href: "#",
      },
      {
        id: 5,
        name: "آموزش",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    name: "درباره ما",
    href: "#",
    subLinks: [
      {
        id: 1,
        name: "قوانین و مقررات",
        href: "#",
      },
      {
        id: 2,
        name: "اهداف و چشم انداز",
        href: "#",
      },
      {
        id: 3,
        name: "معرفی شرکت",
        href: "#",
      },
    ],
  },
  {
    id: 5,
    name: "تماس باما",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main Navigation" className={styles.nav}>
      <ul role="menubar">
        {links.map(({ id, name, href, subLinks }: any) => {
          const activeClass = pathname === href ? "active" : "";

          return (
            <li role="none" key={id}>
              <a href={href} role="menuitem" className={activeClass}>
                {name}
              </a>
              {subLinks && (
                <ul role="menu">
                  {subLinks.map(({ id, name, href }: any) => (
                    <li role="none" key={id}>
                      <a href={href} role="menuitem" className={activeClass}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
