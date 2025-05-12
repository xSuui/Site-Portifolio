"use client";
import React from "react";
import "./Footer.style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright ©{new Date().getFullYear()}. Todos os direitos reservados.
      </p>
    </footer>
  );
};
