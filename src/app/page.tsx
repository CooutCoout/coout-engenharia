import Card from "@/components/Card";
import Nav from "@/components/Nav";
import { dadosDaEmpresa } from "@/data";
export default function Home() {
  return (
    <div className="bg-white h-full">
      <Nav />
      <div className="min-h-[85vh] bg-black relative pl-72">
        <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover opacity-10" />
        <div className="relative z-10 p-4 flex flex-col gap-2 pt-72">
          <h1 className="text-cinza-claro text-6xl font-bold ">
            Bem-vindo à{" "}
            <span className="text-azul-claro">COOUT Engenharia</span>
          </h1>
          <h2 className="text-verde-claro text-3xl">
            Sua Parceira em Segurança e Saúde no Trabalho
          </h2>
          <div className="mt-16">
            <button className="bg-azul-claro hover:bg-blue-500 w-fit px-20 py-5 text-3xl text-white rounded-2xl font-bold" style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      }}>
              Fale com nossa Equipe
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex px-72 py-32"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <div>
          <h3 className="text-6xl  pb-8 font-bold text-azul-claro">
            QUEM SOMOS
          </h3>
          <div className="flex flex-col  justify-center items-center self-center">
            <p className="text-cinza-medio-texto-sec p-4 text-2xl">
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
      </div>
      <div className="bg-azul-claro grid grid-cols-2 px-72 gap-4 py-10">
        {dadosDaEmpresa.map((item) => (
          <Card key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
