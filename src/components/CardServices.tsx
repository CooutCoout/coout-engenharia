import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardServices({ title, text, image, page }: { title: string, text: string, image: string, page: string }) {
  return (
    <div
      className="bg-white p-4 rounded-2xl shadow-md min-w-[300px] drop-shadow-lg max-w-[300px] flex flex-col items-center gap-4 hover:scale-105 ease-in-out justify-between "
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
      }}
    >
      <Image
        src={image}
        className="rounded-2xl"
        width={300}
        height={300}
        alt="PPRA"
      />
      <h4 className="text-2xl font-bold text-cinza-escuro text-center min-h-24 px-7">
        {title}
      </h4>
      <p className="text-cinza-medio-texto-sec text-center">
        {text}
      </p>
      <Link href={page} className="justify-self-end bg-cinza-claro hover:bg-cinza-escuro font-bold px-10 py-2 rounded-2xl hover:scale-105 ease-in-out hover:text-white">Saiba mais</Link>
    </div>
  );
}
