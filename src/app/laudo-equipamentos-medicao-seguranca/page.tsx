/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import CardAccordion from "@/components/CardAccordion";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { equipamentosMedicaoAccordion } from "@/data";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="h-full">
      <Nav />
      <div className="px-5 lg:px-60 py-32 flex flex-col items-center justify-center gap-10 bg-azul-claro ">
        <div className="mt-32 flex flex-col justify-center items-center">
          <h2 className="lg:text-6xl text-4xl pb-4 font-bold text-white">
          Equipamentos de Medição e Segurança: Garantindo um Ambiente de Trabalho Seguro e Conformidade Total
          </h2>
        </div>
        <a
          href="/#falarconosco"
          className="bg-blue-500 hover:bg-blue-600 w-fit lg:px-20 py-4 px-10 lg:py-5 lg:text-3xl text-xl text-white rounded-2xl font-bold"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        >
          Fale com nossa Equipe
        </a>
      </div>
      <div className="px-5 lg:px-60 flex flex-col gap-5 lg:mb-40 mb-20 lg:py-32 py-20">
        <div className="flex flex-col gap-10 pb-8">
          <p className="text-cinza-medio-texto-sec  text-2xl">
          Na busca pela segurança e saúde no trabalho, oferecemos uma linha completa de equipamentos essenciais para medir e controlar diversos aspectos do ambiente. Nossos produtos são projetados para assegurar um local de trabalho seguro e saudável, com tecnologia de ponta e precisão confiável.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-1/2 flex flex-col gap-4">
            {equipamentosMedicaoAccordion.map((item) => (
              <CardAccordion
                id={item.id}
                key={item.id}
                question={item.title}
                answer={item.text}
                activeAccordion={activeAccordion}
                toggleAccordion={toggleAccordion}
                sigla={""}
              />
            ))}
          </div>
          <div className="lg:w-1/2">
            <Image
              className="rounded-2xl"
              src={"/medicao.jpg"}
              width={600}
              height={600}
              alt="Equipamentos de Medição e Segurança"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="lg:text-3xl text-2xl  pb-8 font-bold text-azul-claro">
          Por Que Escolher Nossos Equipamentos?
          </h3>
          <p className="text-cinza-medio-texto-sec  text-2xl">
          Nossos equipamentos oferecem soluções abrangentes para a segurança e saúde no trabalho, assegurando um ambiente mais seguro, eficiente e conforme com todas as regulamentações. Com tecnologia avançada e precisão, garantimos a proteção e bem-estar de sua equipe.
          </p>

          <p className="text-cinza-medio-texto-sec  text-2xl">
          Descubra como nossos equipamentos podem transformar a segurança no seu ambiente de trabalho. Entre em contato hoje mesmo para mais informações e suporte especializado.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
