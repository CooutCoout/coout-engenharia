import Card from "@/components/Card";
import CardServices from "@/components/CardServices";
import Nav from "@/components/Nav";
import { dadosDaEmpresa, dadosServicos } from "@/data";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


import Image from "next/image";
import Forms from "@/components/Forms";

export default function Home() {

  return (
    <div className="bg-white w-full">
      <div className="min-h-[100vh] bg-black relative">
        <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover lg:bg-center opacity-10 h-full" />
        <Nav />
        <div className="relative z-10 p-4 flex flex-col justify-center gap-2 px-5 lg:px-60 h-screen">
          <h1 className="text-cinza-claro lg:text-6xl text-4xl font-bold ">
            Bem-vindo à{" "}
            <span className="text-azul-claro">COOUT Engenharia</span>
          </h1>
          <h2 className="text-verde-claro lg:text-3xl text-xl">
            Sua Parceira em Segurança e Saúde no Trabalho
          </h2>
          <div className="mt-16">
            <button
              className="bg-azul-claro hover:bg-blue-500 w-fit lg:px-20 py-4 px-10 lg:py-5 lg:text-3xl text-xl text-white rounded-2xl font-bold"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              Fale com nossa Equipe
            </button>
          </div>
        </div>
      </div>
      <div id="quemsomos" className="flex flex-col px-10 lg:px-60 lg:py-32 py-20 gap-10 h-full">
        <div >
          <h3 className="lg:text-6xl text-4xl  pb-8 font-bold text-azul-claro">
            QUEM SOMOS
          </h3>
          <div className="flex flex-col  justify-center items-center self-center">
            <p className="text-cinza-medio-texto-sec  text-2xl">
              A{" "}
              <span className="font-bold text-azul-claro">
                COOUT Engenharia
              </span>{" "}
              se destaca como uma referência no mercado de Segurança e Saúde no
              Trabalho (SST). Com um time de especialistas altamente
              qualificados e uma sólida trajetória, estamos aqui para
              transformar sua abordagem de segurança, promovendo ambientes de
              trabalho mais seguros e eficientes.
            </p>
          </div>
        </div>
        <div>
          <h3 className="lg:text-6xl text-4xl  pb-8 font-bold text-azul-claro uppercase">
            Nossa História
          </h3>
          <div className="flex flex-col  justify-center items-center self-center">
            <p className="text-cinza-medio-texto-sec  text-2xl">
              Nascemos do sonho de oferecer soluções inovadoras e eficazes na
              área de SST. Nossa trajetória é marcada pelo compromisso com a
              qualidade e a excelência, impulsionados por um desejo constante de
              aprimorar a segurança e a saúde no ambiente de trabalho.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 px-10 lg:px-60 gap-20 lg:py-32 py-20 bg-azul-claro justify-center">
        {dadosDaEmpresa.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      <div className="relative z-10 h-full lg:py-32 py-20 bg-black">
        <div className="absolute inset-0 z-20 bg-[url('/colaborador.jpg')] bg-cover bg-center opacity-65" />
        <div className="relative z-20 flex flex-col gap-10 bg-black opacity-75 p-10 mx-10 lg:mx-72 rounded-2xl">
          <h3 className="lg:text-6xl text-2xl font-bold uppercase text-verde-claro">
            Porque escolher a COOUT Engenharia:
          </h3>
          <div className="text-white lg:text-3xl text-xl">
            Com um conceito inovador de Melhoria Contínua baseado em quatro
            pilares fundamentais:
          </div>
          <ul className="text-white lg:text-2xl text-xl flex flex-col gap-4">
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Engenharia de Segurança do Trabalho
            </li>
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Engenharia Mecânica
            </li>
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Assistência Técnica em Perícias
            </li>
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Treinamentos
            </li>
          </ul>
          <div className="text-white lg:text-2xl text-xl">
            Estamos preparados para oferecer soluções abrangentes e eficientes.
            Sob a liderança do Engº Dioni Couto de Oliveira, a COOUT Engenharia
            é reconhecida nacionalmente pela sua excelência e dedicação. Estamos
            comprometidos em superar suas expectativas e ajudar sua empresa a
            alcançar os mais altos padrões de segurança e saúde. Entre em
            contato conosco e descubra como podemos elevar sua segurança e
            eficiência a um novo nível de excelência.
          </div>
        </div>
      </div>
      <div className="lg:py-32 py-20 px-10 lg:px-60" id="nossosservicos">
        <h3 className="lg:text-6xl text-4xl font-bold text-azul-claro">NOSSOS SERVIÇOS</h3>
        <div className="pt-16 flex gap-10 lg:flex-row flex-wrap">
          {dadosServicos.map((item) => (
            <CardServices
              key={item.id}
              title={item.title}
              text={item.text}
              image={item.image}
              page={item.page}
            />
          ))}
        </div>
      </div>
      <div className="px-10 lg:px-60 flex lg:py-32 py-20 lg:flex-row flex-col" id="falarconosco" style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",        
        }}>
        <div className="lg:w-1/2 lg:h-auto h-36 bg-[url('/man-safety.jpg')] bg-cover bg-center backdrop-contrast-50 backdrop-brightness-50" />
        <div className="lg:w-1/2 bg-azul-claro px-10 py-10 flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-blue-500">ENTRE EM CONTATO</h3>
          <h4 className="lg:text-5xl text-3xl font-bold text-white">
            FALE COM UM ESPECIALISTA
          </h4>
          <Forms />
        </div>
      </div>
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
            <a href="/#nossosservicos" className="text-base hover:text-azul-claro">
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
          <p className="text-2xl font-bold text-azul-claro lg:text-left text-center">Redes Sociais</p>
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
    </div>
  );
}
