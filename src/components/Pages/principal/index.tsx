'use client';

import Image from "next/image";
import React from "react";

export default function Principal() {
  return (
    <div className="flex items-center gap-36 justify-around w-full h-full">
      <Image src="/profileMath.svg" alt="profile" width={300} height={300} />

      <div className="w-[400px] font-semibold text-2xl">
        <h2>Olá! Meu nome é Matheus Rosa, e sou Desenvolvedor Full-stack e formado em Engenharia.</h2>
      </div>
    </div>
  );
}