import Card from "@/components/Card";
import CardServices from "@/components/CardServices";
import Nav from "@/components/Nav";
import { dadosDaEmpresa, dadosServicos } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="min-h-[100vh] bg-black relative">
        <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover opacity-10 h-full" />
        <Nav />
        <div className="relative z-10 p-4 flex flex-col justify-center gap-2 px-72 h-screen">
          <h1 className="text-cinza-claro text-6xl font-bold ">
            Bem-vindo à{" "}
            <span className="text-azul-claro">COOUT Engenharia</span>
          </h1>
          <h2 className="text-verde-claro text-3xl">
            Sua Parceira em Segurança e Saúde no Trabalho
          </h2>
          <div className="mt-16">
            <button
              className="bg-azul-claro hover:bg-blue-500 w-fit px-20 py-5 text-3xl text-white rounded-2xl font-bold"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              Fale com nossa Equipe
            </button>
          </div>
        </div>
      </div>
      <div id="quemsomos" className="flex px-72 py-32 gap-10 h-full">
        <div className="w-1/2 ">
          <h3 className="text-6xl  pb-8 font-bold text-azul-claro">
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
        <div className="w-1/2">
          <h3 className="text-6xl  pb-8 font-bold text-azul-claro uppercase">
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

      <div className="grid grid-cols-3 px-72 gap-4 py-32 bg-azul-claro ">
        {dadosDaEmpresa.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      <div className="relative z-10 h-full py-32 bg-black">
        <div className="absolute inset-0 z-20 bg-[url('/colaborador.jpg')] bg-cover bg-center opacity-65" />
        <div className="relative z-20 flex flex-col gap-10 bg-black opacity-75 p-10 mx-72 rounded-2xl">
          <h3 className="text-6xl font-bold uppercase text-verde-claro">
            Porque escolher a COOUT Engenharia:
          </h3>
          <div className="text-white text-3xl">
            Com um conceito inovador de Melhoria Contínua baseado em quatro
            pilares fundamentais:
          </div>
          <ul className="text-white text-2xl flex flex-col gap-4">
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
          <div className="text-white text-2xl">
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
      <div className="py-32 px-72">
        <h3 className="text-6xl font-bold text-azul-claro">NOSSOS SERVIÇOS</h3>
        <div className="pt-16 grid grid-cols-4 gap-10">
          {dadosServicos.map((item) => (
            <CardServices
              key={item.id}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="px-72 flex">
        <div className="w-1/2 bg-[url('/notebook.webp')] bg-cover bg-center"></div>
        <div className="w-1/2 bg-azul-claro px-28 py-32 flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-blue-500">ENTRE EM CONTATO</h3>
          <h4 className="text-5xl font-bold text-white">
            FALE COM UM ESPECIALISTA
          </h4>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              id="default-input"
              placeholder="Nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <input
              type="text"
              id="default-input"
              placeholder="Nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <input
              type="text"
              id="default-input"
              placeholder="Nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <textarea
              id="default-input"
              placeholder="Nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <button
              className="bg-verde-claro hover:bg-green-600 w-fit px-20 py-3 text-white rounded-2xl font-bold"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-cinza-claro py-20 px-72 grid grid-cols-4 gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center w-fit rounded-full p-1 bg-white">
            <Image src="/logo.png" width={100} height={100} alt="logotipo" />
          </div>
          <div>
            <p className="uppercase text-2xl font-bold text-azul-claro">COOUT Engenharia</p>
            <span className="uppercase text-base font-bold">
              laudos, consultoria e treinamentos LTDA.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-azul-claro">Navegação</p>
          <ul className="flex flex-col gap-2">
            <li className="text-base">Home</li>
            <li className="text-base">Quem Somos</li>
            <li className="text-base">Serviços</li>
            <li className="text-base">Contato</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-azul-claro">Redes Sociais</p>
          <p className="text-base">11 - 55555-5555</p>
          <p className="text-base">dioni.couto@yahoo.com.br</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-azul-claro">Contato</p>
          <p className="text-base">11 - 55555-5555</p>
          <p className="text-base">dioni.couto@yahoo.com.br</p>
          <p className="text-base">Rua Doutor Almenor Jardim Silveira Jardim Alvorada, Santo André/SP CEP: 09180-070</p>
        </div>
      </footer>
    </div>
  );
}
