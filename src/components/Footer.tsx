import React from "react";
import { FaFacebookSquare, FaLinkedin, FaPhoneAlt, FaWhatsappSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cinza-claro py-14 lg:px-40 px-10 grid lg:grid-cols-4 grid-cols-1 lg:gap-5 gap-10">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-center items-center w-fit rounded-full p-1 bg-white">
          <Image src="/logo.png" width={80} height={80} alt="logotipo" />
        </div>
        <div className="flex flex-col items-center">
          <p className="uppercase text-2xl font-bold text-azul-claro">
            COOUT Engenharia
          </p>
          <span className="uppercase text-base font-bold">
            LAUDOS, CONSULTORIA E TREINAMENTOS
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:gap-2 font-bold lg:pl-20">
        <p className="text-2xl font-bold text-azul-claro">Navegação</p>
        <div className="flex flex-col gap-2">
          <a href="/" className="text-base hover:text-azul-claro">
            Home
          </a>
          <a href="#quemsomos" className="text-base hover:text-azul-claro">
            Quem Somos
          </a>
          <a
            href="/#nossosservicos"
            className="text-base hover:text-azul-claro"
          >
            Serviços
          </a>
          <a href="/#falarconosco" className="text-base hover:text-azul-claro">
            Contato
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 font-semibold">
        <p className="text-2xl font-bold text-azul-claro">Contato</p>
        <p className="text-base flex gap-2 items-center">
          <span>
            <IoIosMail color="#38b6ff" size={20} />
          </span>
          dioni.couto@yahoo.com.br
        </p>
        <p className="text-base flex gap-2 items-center">
          <span>
            <FaPhoneAlt color="#38b6ff" size={18} />
          </span>
          11 - 9999-5555
        </p>
        <p className="text-base flex gap-2 items-center">
          <span>
            <FaLocationDot color="#38b6ff" size={20} />
          </span>
          Rua Doutor Almenor Jardim Silveira Jardim Alvorada, Santo André/SP
          CEP: 09180-070
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-azul-claro lg:text-left text-center">
          Redes Sociais
        </p>
        <div className="flex gap-3 lg:self-start self-center">
          <a href="">
            <FaFacebookSquare color="#3b5998" size={30} />
          </a>
          <a href="">
            <FaLinkedin color="#0e76a8" size={30} />
          </a>
          <a href="">
            <FaWhatsappSquare color="#25d366" size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
