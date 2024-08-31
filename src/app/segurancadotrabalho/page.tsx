/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CardAccordion from "@/components/CardAccordion";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { seguranDoTrabalhoAccordion } from "@/data";
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
            SEGURANÇA DO TRABALHO
          </h2>
          <h3 className="text-2xl text-white">
            Promova uma cultura sólida de segurança na sua empresa.
          </h3>
        </div>
        <a
          title="Fale com nossa Equipe"
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
        {seguranDoTrabalhoAccordion.map((item) => (
          <CardAccordion
            id={item.id}
            key={item.id}
            question={item.question}
            answer={item.answer}
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            sigla={item.sigla}
            image={item.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
