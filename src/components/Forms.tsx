"use client";

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

type Inputs = {
  from_name: string;
  from_email: string;
  message: string;
};

export default function Forms() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    if (e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_o1dndxs",
          "template_xtz56rn",
          e.target,
          "vG1JqsHz5RVY8CJJM"
        )
        .then(
          (result: any) => {
            console.log(result.text);
            alert("Email enviado com sucesso!");
          },
          (error) => {
            console.log(error.text);
            alert("Ocorreu um erro ao enviar o email.");
          }
        );
    }
  };

  return (
    <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              {...register("from_name")}
              placeholder="Nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <input
              type="text"
              {...register("from_email")}
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <textarea
              {...register("message")}
              placeholder="Deixe sua mensagem aqui"
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
          </form>
  )
}