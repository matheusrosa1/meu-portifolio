'use client';

import React from 'react'

export default function About() {
  return (
    <section id='about' className='flex items-center justify-center bg-[var(--grey)] w-full h-screen'>
      <div className='flex flex-col gap-20 items-center'>
        <h1 className='font-bold text-2xl'>Sobre mim</h1>

        <div className='w-6/12 space-y-4 text-xl'>
          <p>Sou Desenvolvedor Web Full Stack e formado em Engenharia Florestal pela ESALQ 
            - Universidade de São Paulo/USP. Recentemente, concluí o curso de desenvolvimento Web Full Stack pela Trybe 
            - Escola de Tecnologia, onde adquiri as principais habilidades práticas em SQL, JavaScript e Python.
          </p>
          <p>
            Tenho experiência em análise de dados, resolução de problemas e trabalho em equipe. Atualmente, estou buscando 
            novas oportunidades como Desenvolvedor Web e Cientista de Dados. Estou comprometido com o aprendizado contínuo 
            e sempre me esforço para estar atualizado com as últimas tendências tecnológicas.
          </p>
        </div>
      </div>      
    </section>
  )
}
