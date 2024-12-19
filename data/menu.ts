import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  // {
  //   title: "Home",
  //   links: [
  //     { href: "/", label: "Homepage", isCurrent: true },
  //   ],
  //   isCurrent: true,
  // },
  {
    title: "About",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Blog",
    links: [
      { href: "/blog", label: "Blog" },
    ],
  },
];
