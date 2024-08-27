/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import CardAccordion from "@/components/CardAccordion";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { dataNr12 } from "@/data";
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
            NR 12 - SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS
          </h2>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 w-fit lg:px-20 py-4 px-10 lg:py-5 lg:text-3xl text-xl text-white rounded-2xl font-bold"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        >
          Fale com nossa Equipe
        </button>
      </div>
      <div className="px-5 lg:px-60 flex flex-col gap-5 lg:mb-40 mb-20 lg:py-32 py-20">
        <div className="flex flex-col gap-10 pb-8">
          <h2 className="lg:text-5xl text-3xl  pb-8 font-bold text-azul-claro">
            Renove o Seu Laudo Compressor com Profissionalismo e Agilidade
          </h2>
          <p className="text-cinza-medio-texto-sec  text-2xl">
            O Laudo Compressor, também conhecido como Laudo NR13 ou Laudo de
            Vaso de Pressão, é essencial para manter a conformidade com a NR13 e
            evitar possíveis penalidades. Não permita que seu laudo expire!
            Entre em contato conosco agora mesmo para solicitar uma proposta de
            renovação. Nossa equipe altamente qualificada e nossos equipamentos
            de última geração garantem uma entrega pontual e eficiente. Nosso
            compromisso é assegurar que seu compressor ou vaso de pressão esteja
            sempre em conformidade com as exigências da NR13. Ao escolher nossos
            serviços, você obtém as seguintes vantagens:
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-1/2 flex flex-col gap-4">
            {dataNr12.map((item) => (
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
              src={"/nr13.jpg"}
              width={600}
              height={600}
              alt="3213"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
