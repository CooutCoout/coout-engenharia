import { GiArcheryTarget } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

export default function Card({
  title,
  text,
  id,
}: {
  title: string;
  text: string;
  id: number;
}) {
  return (
      <div
        className="flex flex-col bg-white p-8 rounded-2xl h-full hover:drop-shadow-lg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",        
        }}
        
      >
        <div
          className="relative -mt-14 bg-white w-3/4 mx-auto rounded-2xl flex justify-center items-center"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        >
          <h3 className="text-4xl text-center py-2 font-bold text-azul-claro flex gap-2 items-center ">
            {id === 1 ? (
              <GiArcheryTarget size={50} />
            ) : id === 2 ? (
              <IoEyeOutline size={50} />
            ) : id === 3 ? (
              <LuHeart size={45} />
            ) : null}
            {title}
          </h3>
        </div>

        <div className="flex flex-col  justify-center items-center self-center">
          <p className="text-cinza-medio-texto-sec p-4 text-xl leading-relaxed text-justify">
            {text}
          </p>
        </div>
      </div>
  );
}
