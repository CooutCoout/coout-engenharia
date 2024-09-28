import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

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
          <span className="uppercase text-base font-bold whitespace-nowrap">
            LAUDOS, CONSULTORIA E TREINAMENTOS
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:gap-2 font-bold lg:pl-20">
        <p className="text-2xl font-bold text-azul-claro">Navegação</p>
        <div className="flex flex-col gap-2">
          <a title="Início" href="/" className="text-base hover:text-azul-claro">
            Início
          </a>
          <a title="NR-12" href="/laudo-nr12" className="text-base hover:text-azul-claro">
            NR-12
          </a>
          <a title="NR-13" href="/laudo-nr12" className="text-base hover:text-azul-claro">
            NR-13
          </a>
          <a title="Quem Somos" href="#quemsomos" className="text-base hover:text-azul-claro">
            Quem Somos
          </a>
          <a
            title="Serviços"
            href="/#nossosservicos"
            className="text-base hover:text-azul-claro"
          >
            Serviços
          </a>
          <a title="Contato" href="/#falarconosco" className="text-base hover:text-azul-claro">
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
          (11) - 98905-7216
        </p>
        <p className="text-base flex gap-2 items-center">
          <span>
            <FaLocationDot color="#38b6ff" size={20} />
          </span>
          Avenida Dom Pedro II, 1403 - Bairro Jardim - Santo André - SP - CEP 09080-110
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-azul-claro lg:text-left text-center">
          Redes Sociais
        </p>
        <div className="flex gap-3 lg:self-start self-center">
          <a
            title="Facebook"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100003314685225"
          >
            <FaFacebookSquare color="#3b5998" size={30} />
          </a>
          <a
            title="Linkedin"
            target="_blank"
            href="http://www.linkedin.com/in/engenheiro-dioni-couto"
          >
            <FaLinkedin color="#0e76a8" size={30} />
          </a>
          <a
            title="Whatsapp"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5511989057216"
          >
            <FaWhatsappSquare color="#25d366" size={30} />
          </a>
          <a
            title="Instagram"
            target="_blank"
            href="https://www.instagram.com/coout_engenharia?igsh=cmF4MHZyaXA0YXE2"
          >
            <FaInstagramSquare color="#3f729b" size={30} />
          </a>
        </div>
      </div>
      <a
        title="Whatsapp"
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=5511989057216"
        className="z-50 fixed lg:bottom-10 bottom-5 lg:right-10 right-5"
      >
        <FaWhatsapp
          color="#fff"
          className="bg-green-600 p-2 rounded-full hover:scale-105 ease-in-out"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
          size={65}
        />
      </a>
    </footer>
  );
}
