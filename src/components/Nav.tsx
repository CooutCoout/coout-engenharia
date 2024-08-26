"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`fixed z-50 w-full px-72 transition-all duration-300 ${
      scroll ? "bg-white shadow-md" : "bg-transparent"
    } h-fit`}
      style={{
        boxShadow:  `${scroll ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : "" } `,
      }}
    >
      <div className={` flex flex-wrap items-center justify-between mx-auto py-4`}>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image width={scroll ? 50 : 100} height={scroll ? 50 : 100} className="transition-all duration-300" src="/logo.png" alt="Flowbite Logo" />
          <div>
            <p className={` self-center ${scroll ? "text-xl" : "text-3xl"}  font-semibold text-azul-claro transition-all duration-300`}>
              Coout Engenharia
            </p>
            <span className={`${scroll ? "hidden" : ""} italic text-cinza-claro`}>Consultoria, laudos e treinamentos.</span>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className={`${scroll ? "text-cinza-escuro" : "text-cinza-claro"} text-xl flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}>
            <li>
              <a
                href="/"
                className="block py-2 px-3  md:hover:text-azul-claro md:p-0"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#quemsomos"
                className="block py-2 px-3  md:hover:text-azul-claro md:p-0"
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  md:hover:text-azul-claro md:p-0"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  md:hover:text-azul-claro md:p-0"
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
