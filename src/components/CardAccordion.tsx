import { FiChevronUp, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

type ITopics = {
  id: number;
  title: string;
  text: string;
};

export interface TopicItem {
  title: string;
  items: ITopics[];
}

export default function CardAccordion({
  id,
  activeAccordion,
  toggleAccordion,
  question,
  answer,
  answer2,
  sigla,
  image,
  topicItems,
}: {
  id: number;
  activeAccordion: number | null;
  toggleAccordion: (index: number) => void;
  question: string;
  answer: string;
  answer2?: string;
  sigla: string;
  image?: string;
  topicItems?: TopicItem;
}) {
  return (
    <div>
      <div
        className={`flex justify-between cursor-pointer bg-azul-claro rounded-t-2xl `}
        onClick={() => toggleAccordion(id)}
      >
        <div
          className={`bg-cinza-medio-texto-sec min-w-[88px] max-w-[88px] lg:min-w-44 lg:max-w-44 py-2 font-bold px-4 flex justify-center items-center lg:text-3xl text-xl rounded-tl-2xl`}
        >
          {sigla}
        </div>
        <div className="font-semibold py-2 px-2  w-full lg:text-2xl">
          {question}
        </div>
        <div className="w-8 flex items-center">
          {activeAccordion === id ? (
            <FiChevronUp className="text-proself-btn-dlt" size={30} />
          ) : (
            <FiChevronRight className="text-proself-btn-dlt" size={30} />
          )}
        </div>
      </div>
      {activeAccordion === id && (
        <div className="lg:text-lg text-[15px] p-2 flex lg:flex-row  flex-col bg-cinza-claro">
          {image && (
            <div className="lg:min-w-[250px] lg:max-w-[250px]">
              <Image src={image} alt={question} width={550} height={250} />
            </div>
          )}
          {answer2 ? (
            <div className="flex flex-col">
              <p className="p-4 py-1">{answer}</p>
              <p className="p-4 py-1">{answer2}</p>
            </div>
          ) : (
            <div className="p-4 flex flex-col gap-4">
              <p className="">{answer}</p>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{topicItems?.title}</p>
                <ul className="flex flex-col gap-4">
                  {topicItems?.items.map((item, index) => (
                    <li className="" key={index}>
                      <span className="font-bold whitespace-nowrap ">{item.title}</span>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
