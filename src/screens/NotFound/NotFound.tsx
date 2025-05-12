import React from "react";
import "./NotFound.style.css";
import Link from "next/link";
import { IoExitOutline } from "react-icons/io5";

export const NotFound = () => {
  return (
    <div className="notfound">
      Página não encontrada :(
      <Link href={"/"}>
        Voltar para página principal <IoExitOutline size={28} />
      </Link>
    </div>
  );
};
