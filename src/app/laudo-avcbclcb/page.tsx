/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import CardAccordion from "@/components/CardAccordion";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { avcbAccordion } from "@/data";
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
            Auto de Vistoria do Corpo de Bombeiros (AVCB/CLCB)
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
          <h2 className="lg:text-5xl text-3xl  pb-8 font-bold text-azul-claro">
            Certifique a Segurança e a Legalidade da Sua Edificação com Nossos
            Serviços Especializados!
          </h2>
          <p className="text-cinza-medio-texto-sec  text-2xl">
            Você sabia que o Auto de Vistoria do Corpo de Bombeiros (AVCB) e o
            Certificado de Licenciamento do Corpo de Bombeiros (CLCB) são
            essenciais para garantir que sua edificação esteja em conformidade
            com as normas de segurança contra incêndio e pânico? Esses
            documentos não apenas atestam que sua edificação está segura, mas
            também são exigidos para que sua operação funcione dentro da
            legalidade.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-1/2 flex flex-col gap-4">
            {avcbAccordion.map((item) => (
              <CardAccordion
                id={item.id}
                key={item.id}
                question={item.title}
                answer={item.text}
                answer2={item.text2}
                activeAccordion={activeAccordion}
                toggleAccordion={toggleAccordion}
                sigla={""}
              />
            ))}
          </div>
          <div className="lg:w-1/2">
            <Image
              className="rounded-2xl"
              src={"/avcb.jpg"}
              width={600}
              height={600}
              alt="Engenheiro fazendo vistoria"
            />
          </div>
        </div>
        <div>
          <p className="lg:text-3xl text-2xl  pb-8 font-bold text-azul-claro">
            Não deixe a segurança e a conformidade de sua edificação ao acaso.
            Entre em contato hoje mesmo e descubra como podemos ajudar a
            garantir a obtenção do AVCB e do CLCB para sua edificação,
            assegurando que tudo esteja em ordem e conforme com a legislação.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
