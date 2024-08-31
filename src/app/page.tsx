import Card from "@/components/Card";
import CardServices from "@/components/CardServices";
import Nav from "@/components/Nav";
import { dadosDaEmpresa, dadosServicos } from "@/data";
import { ToastContainer } from "react-toastify";
import Forms from "@/components/Forms";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

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
            <a
              title="Fale com nossa Equipe"
              href="/#falarconosco"
              className="bg-azul-claro hover:bg-blue-500 w-fit lg:px-20 py-4 px-10 lg:py-5 lg:text-3xl text-xl text-white rounded-2xl font-bold"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              Fale com nossa Equipe
            </a>
          </div>
        </div>
      </div>
      <div
        id="quemsomos"
        className="flex flex-col px-10 lg:px-60 lg:py-32 py-20 gap-10 h-full"
      >
        <div>
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
          <div className="flex flex-col gap-4">
            <div className="min-w-[250px] max-w-[250px] self-center">

          <Image src="/Engenheiro.png" alt="Colaborador" width={250} height={250} />
            </div>
          <p className="text-white lg:text-2xl text-xl">
            Na COOUT Engenharia, acreditamos que a excelência começa com um
            compromisso inabalável com a segurança e a eficiência. Sob a
            liderança do Eng. Dioni Couto, nossa equipe é sinônimo de inovação e
            dedicação nas áreas de Engenharia de Segurança do Trabalho e
            Engenharia Mecânica. Com uma carreira notável em empresas de renome
            como Goodyear e Toyota, Dioni traz uma visão experiente e
            respeitável para cada projeto, garantindo soluções de alto impacto e
            eficácia.
          </p>

          </div>

          <h3 className="lg:text-4xl text-xl font-bold uppercase text-verde-claro">
            Por que a COOUT Engenharia é a escolha certa?
          </h3>

          <p className="text-white lg:text-2xl text-xl">
            Nossa abordagem inovadora se sustenta em quatro pilares
            fundamentais, assegurando soluções integradas e de alta qualidade:
          </p>
          <ul className="text-white lg:text-2xl text-xl flex flex-col gap-4">
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Engenharia de Segurança do Trabalho:{" "}
              <span className="text-white font-normal">
                {" "}
                Desenvolvemos ambientes de trabalho seguros e saudáveis, com
                práticas que protegem seus colaboradores e garantem conformidade
                com as normas mais exigentes.
              </span>
            </li>
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Assistência Técnica em Perícias:{" "}
              <span className="text-white font-normal">
                {" "}
                Nossos especialistas fornecem análises detalhadas e suporte
                técnico para resolver questões complexas com eficácia e
                precisão.
              </span>
            </li>
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Treinamentos Especializados:{" "}
              <span className="text-white font-normal">
                {" "}
                Capacite sua equipe com nossos treinamentos, que combinam
                conhecimento teórico e prático para promover práticas seguras e
                eficientes.
              </span>
            </li>
            <li className="list-disc ml-10 text-verde-claro font-bold">
              Engenharia Mecânica:{" "}
              <span className="text-white font-normal">
                {" "}
                Oferecemos consultoria especializada para adequação de
                maquinários, alinhando sua empresa com a legislação vigente e
                garantindo total conformidade com a NR12. Nossos serviços
                incluem a elaboração de laudos de conformidade detalhados,
                assegurando que todos os aspectos de segurança em máquinas e
                equipamentos sejam rigorosamente atendidos. Com nossa abordagem,
                promovemos um ambiente de trabalho seguro e eficiente,
                maximizado para o desempenho e conformidade.
              </span>
            </li>
          </ul>
          <div>
            <p className="lg:text-4xl text-xl font-bold uppercase text-verde-claro">
              Nosso compromisso com a excelência
            </p>

            <p className="text-white lg:text-2xl text-xl">
              Na COOUT Engenharia, estamos comprometidos em levar sua empresa a
              novos patamares de segurança e eficiência. Com uma reputação
              nacional consolidada, estamos prontos para superar suas
              expectativas e oferecer soluções personalizadas que atendam às
              suas necessidades específicas.
            </p>
          </div>
          <div>
            <p className="lg:text-4xl text-xl font-bold uppercase text-verde-claro">
              Entre em contato conosco e descubra como podemos fazer a diferença
              na sua empresa.
            </p>

            <p className="text-white lg:text-2xl text-xl">
              Transforme a segurança e a eficiência com a COOUT Engenharia — sua
              parceira confiável na busca pela excelência.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:py-32 py-20 px-10 lg:px-60" id="nossosservicos">
        <h3 className="lg:text-6xl text-4xl font-bold text-azul-claro">
          NOSSOS SERVIÇOS
        </h3>
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
      <div
        className="px-10 lg:px-60 flex lg:py-32 py-20 lg:flex-row flex-col"
        id="falarconosco"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <div className="lg:w-1/2 lg:h-auto h-36 bg-[url('/man-safety.jpg')] bg-cover bg-center backdrop-contrast-50 backdrop-brightness-50" />
        <div className="lg:w-1/2 bg-azul-claro px-10 py-10 flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-blue-500">ENTRE EM CONTATO</h3>
          <h4 className="lg:text-5xl text-3xl font-bold text-white">
            FALE COM UM ESPECIALISTA
          </h4>
          <Forms />
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
