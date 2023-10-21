"use client";

import { usePathname } from "next/navigation";
import Icon from "../icon";

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

interface Props {
  onGeneralLinkClick?: any;
}

export default function NavLinks({ onGeneralLinkClick }: Props) {
  const pathname = usePathname();

  return (
    <ul role="menubar" className="menubar nav-links">
      {links.map(({ id, name, href, subLinks }: any) => {
        const activeClass = pathname === href ? "active" : "";

        return (
          <li role="none" key={id}>
            <a
              href={href}
              role="menuitem"
              onClick={onGeneralLinkClick}
              className={`${activeClass} general-link`}
            >
              {name}
              {subLinks && <Icon name="chevron-down" />}
            </a>
            {subLinks && (
              <ul role="menu" className={`menu`}>
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
  );
}
