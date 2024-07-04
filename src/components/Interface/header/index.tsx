'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full h-16 bg-[var(--green)] flex justify-between px-8 fixed top-0">
      <Image src="/logoMath.svg" alt="logo" width={60} height={60} />

      <div className="flex items-center gap-4 text-white font-bold">
        <Link className="hover:text-black hover:scale-125" href="#home">Início</Link>
        <Link className="hover:text-black hover:scale-125" href="#about">Sobre</Link>
        <Link className="hover:text-black hover:scale-125" href="#projects">Projetos</Link>
        <Link className="hover:text-black hover:scale-125" href="#skills">Habilidades</Link>
        <Link className="hover:text-black hover:scale-125" href="#contacts">Contatos</Link>
      </div>
    </div>
  );
}
