import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <nav
      className="bg-white border-gray-200 px-72"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto min-h-[15vh] py-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image width={100} height={100} src="/logo.png" alt="Flowbite Logo" />
          <div>
            <p className="self-center text-3xl font-semibold text-azul-claro">
              Coout Engenharia
            </p>
            <span className="italic">Consultoria, laudos e treinamentos.</span>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className=" text-xl flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white d">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-azul-claro md:p-0 "
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-azul-claro md:p-0 "
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-azul-claro md:p-0 "
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-azul-claro md:p-0 "
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
