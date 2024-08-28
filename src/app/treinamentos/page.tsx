/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import CardAccordion from "@/components/CardAccordion";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { treinamentoAccordion } from "@/data";
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
            TREINAMENTOS DAS NORMAS REGULAMENTADORAS{" "}
            <span className="text-yellow-200">(NRs)</span>
          </h2>
          <h3 className="text-2xl text-cinza-claro">
            Conte com nossas soluções integradas em SST
          </h3>
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
          <h2 className="lg:text-5xl text-3xl  pb-8 font-bold text-azul-claro">
            Cursos que Vão Auxiliar sua Indústria a Aumentar a Produtividade
          </h2>
          <div className="flex w-full">
            <div
              className="lg:text-2xl w-2/6 font-bold bg-cinza-medio-texto-sec text-white p-5 flex flex-col justify-center rounded-l-2xl"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              Confira nossos Cursos <span className="whitespace-nowrap">In Company</span>
            </div>
            <div
              className="lg:text-xl text-sm w-4/6 bg-cinza-claro p-4 rounded-r-2xl"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              Oferecemos cursos de aperfeiçoamento personalizados para atender
              às necessidades específicas de cada organização. Nossos cursos
              combinam teoria e prática, com turmas reduzidas na própria
              empresa, para garantir a máxima eficácia e aplicabilidade.
            </div>
          </div>
        </div>
        {treinamentoAccordion.map((item) => (
          <CardAccordion
            id={item.id}
            key={item.id}
            question={item.question}
            answer={item.answer}
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            sigla={item.sigla}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
