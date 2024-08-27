import { FiChevronUp, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export default function CardAccordion({
  id,
  activeAccordion,
  toggleAccordion,
  question,
  answer,
  sigla,
}: {
  id: number;
  activeAccordion: number | null;
  toggleAccordion: (index: number) => void;
  question: string;
  answer: string;
  sigla: string;
}) {
  return (
    <div>
      <div
        className={`flex items-center justify-between cursor-pointer bg-azul-claro ${activeAccordion ? "rounded-tr-2xl rounded-tl-2xl" : "rounded-2xl"} `}
        onClick={() => toggleAccordion(id)}
      >
        <div className="flex items-center justify-center">
          <div className={`bg-cinza-medio-texto-sec h-16 w-44 font-bold px-10 flex justify-center items-center text-3xl ${activeAccordion ? "rounded-t-2xl" : "rounded-l-2xl"} `}>
            {sigla}
          </div>
          <div className="text-2xl font-semibold p-4">
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
        <div className="lg:text-lg text-[15px] p-2 flex bg-cinza-claro">
          <div className="min-w-[250px] max-w-[250px]">
            <Image
              src="/quemsomos.webp"
              alt="quemsomos"
              width={250}
              height={250}
            />
          </div>
          <p className="p-4">
          {answer}

          </p>
          </div>
      )}
    </div>
  );
}
