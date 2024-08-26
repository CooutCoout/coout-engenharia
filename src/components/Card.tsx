export default function Card({ title, text }: { title: string; text: string }) {
  return (
      <div className=" flex flex-col bg-white p-8 rounded-2xl" style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      }}>
        <h3 className="text-4xl text-center  pb-3 font-bold text-azul-claro">
          {title}
        </h3>
        <div className="flex flex-col  justify-center items-center self-center">
          <p className="text-cinza-medio-texto-sec p-4 text-xl leading-relaxed text-justify">
            {text}
          </p>
        </div>
      </div>
  );
}
