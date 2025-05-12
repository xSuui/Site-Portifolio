"use client";
import React from "react";
import "./SocialMidiaCard.style.css";
import Link from "next/link";

export interface SocialMidiaCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  ctaLink?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export const SocialMidiaCard: React.FC<SocialMidiaCardProps> = ({
  icon,
  subtitle,
  title,
  ctaLink,
  target,
}) => {
  return ctaLink ? (
    <Link
      className="socialmidiacard"
      href={ctaLink}
      target={target}
      draggable={false}
    >
      {icon}
      {title && <p>{title}</p>}
      {subtitle && <span>{subtitle}</span>}
    </Link>
  ) : (
    <div className="socialmidiacard">
      {icon}
      {title && <p>{title}</p>}
      {subtitle && <span>{subtitle}</span>}
    </div>
  );
};
