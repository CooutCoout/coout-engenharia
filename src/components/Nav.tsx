"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [checkPath, setCheckPath] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setCheckPath(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed z-50 w-full px-6 md:px-72 ${menuOpen ? "h-full" : "h-auto"} transition-all duration-300 ${
        scroll || checkPath || menuOpen ? "bg-white shadow-md" : "bg-transparent"
      } h-fit`}
      style={{
        boxShadow: `${scroll ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : ""}`,
      }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="lg:w-auto w-20">
          <Image
            width={scroll ? 50 : 100}
            height={scroll ? 50 : 100}
            className="transition-all duration-300"
            src="/logo.png"
            alt="Flowbite Logo"
            />
          </div>
          <div>
            <p
              className={`self-center ${
                scroll ? "text-xl" : "text-3xl"
              }  font-semibold text-azul-claro transition-all duration-300`}
            >
              Coout Engenharia
            </p>
            <span
              className={`${
                scroll ? "hidden" : ""
              } italic ${
                checkPath ? "text-cinza-escuro" : "text-cinza-claro"
              }`}
            >
              Consultoria, laudos e treinamentos.
            </span>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes color={scroll ? "" : "#fff"} /> : <FaBars color={scroll ? "" : "#fff"} />}
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mt-4 md:mt-0`}
          id="navbar-dropdown"
        >
          <ul
            className={`${
              scroll || checkPath || menuOpen ? "text-cinza-escuro" : "text-cinza-claro"
            } text-xl flex flex-col font-medium p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row`}
          >
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:hover:text-azul-claro md:p-0"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/#quemsomos"
                className="block py-2 px-3 md:hover:text-azul-claro md:p-0"
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="/#nossosservicos"
                className="block py-2 px-3 md:hover:text-azul-claro md:p-0"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="/#falarconosco"
                className="block py-2 px-3 md:hover:text-azul-claro md:p-0"
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
