"use client";
import React from "react";
import "./Header.style.css";
import Link from "next/link";
import Image from "next/image";
import { anchors } from "@/mocks/headerLink";
import { SidePanel } from "../SidePanel/SidePanel";
import { IoMenu } from "react-icons/io5";

export interface HeaderProps {
  logo: {
    image: string;
    cta: string;
  };
  links: {
    href: string;
    label: string;
  }[];
}

export const Header: React.FC<HeaderProps> = ({ links, logo }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="header" id={anchors.home}>
        <div className="header__container">
          <nav>
            <div className="header__logo-container">
              <Link href={logo.cta} className="header__logo">
                <Image src={logo.image} alt="" width={124} height={55} />
              </Link>

              <button type="button" onClick={() => setOpen(!open)}>
                <IoMenu color="#fff" size={28} />
              </button>
            </div>

            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <SidePanel changeOpen={() => setOpen(!open)} open={open} size="normal">
          <>
            <Image src={logo.image} alt="" width={124} height={55} />
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} onClick={() => setOpen(!open)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        </SidePanel>
      </header>
    </>
  );
};
