import { FiChevronUp, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export default function CardAccordion({
  id,
  activeAccordion,
  toggleAccordion,
  question,
  answer,
  sigla,
  image,
}: {
  id: number;
  activeAccordion: number | null;
  toggleAccordion: (index: number) => void;
  question: string;
  answer: string;
  sigla: string;
  image?: string;
}) {
  return (
    <div>
      <div
        className={`flex items-center justify-between cursor-pointer bg-azul-claro rounded-t-2xl `}
        onClick={() => toggleAccordion(id)}
      >
        <div className="flex items-center justify-center">
          <div className={`bg-cinza-medio-texto-sec h-24 lg:h-16 min-w-24 lg:w-44 font-bold lg:px-10 flex justify-center items-center lg:text-3xl text-xl rounded-tl-2xl `}>
            {sigla}
          </div>
          <div className="lg:text-2xl font-semibold lg:p-4 px-4">
            {question}
          </div>
        </div>
        <div className="w-8">
          {activeAccordion === id ? (
            <FiChevronUp className="text-proself-btn-dlt" size={30} />
          ) : (
            <FiChevronRight className="text-proself-btn-dlt" size={30} />
          )}
        </div>
      </div>
      {activeAccordion === id && (
        <div className="lg:text-lg text-[15px] p-2 flex lg:flex-row  flex-col bg-cinza-claro">
          { image && <div className="lg:min-w-[250px] lg:max-w-[250px]">
            <Image
              src={image}
              alt="quemsomos"
              width={550}
              height={250}
            />
          </div>}
          <p className="p-4">
          {answer}

          </p>
          </div>
      )}
    </div>
  );
}
