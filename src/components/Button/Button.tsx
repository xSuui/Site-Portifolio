"use client";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.style.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  borderColor?: string;
  variant: "light" | "dark" | "primary";
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
  icon?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  borderColor = "#2894ff",
  variant = "light",
  size = "small",
  fullWidth,
  ...rest
}) => {
  const isFullwidth = fullWidth ? "button__fullWidth" : "";
  const isVariant = `button__${variant}`;
  const isSize = `button__${size}`;

  return (
    <button
      className={`button ${isFullwidth} ${isVariant} ${isSize} ${className}`}
      {...rest}
    >
      <span style={{ background: borderColor }} />
      <span style={{ background: borderColor }} />
      <span style={{ background: borderColor }} />
      <span style={{ background: borderColor }} />
      {children}
    </button>
  );
};
