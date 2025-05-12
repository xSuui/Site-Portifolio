"use client";
import React from "react";
import "./Hero.style.css";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";

interface ICTA {
  cta: string;
  ctaLink: string;
  isDownload?: boolean;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  contact: ICTA;
  cv: ICTA;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  contact,
  cv,
}) => {
  return (
    <div className="hero" id="hero">
      <Container>
        <div className="hero__content__profile">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>

          <div className="hero__cta">
            <Link href={cv.ctaLink} download={cv.isDownload} target={cv.target}>
              <Button
                variant="primary"
                borderColor="var(--warning-light)"
                fullWidth
                size="medium"
              >
                {cv.cta}
              </Button>
            </Link>

            <Link href={contact.ctaLink} target={contact.target}>
              <Button
                variant="light"
                borderColor="var(--warning-main)"
                fullWidth
                size="medium"
              >
                {contact.cta}
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src={image}
          alt="profile"
          width={736}
          height={978}
          draggable={false}
        />
      </Container>
    </div>
  );
};
