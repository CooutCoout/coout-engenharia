"use client";

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

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
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    if (e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_n7xxtw4",
          "template_x99a6x7",
          e.target,
          "_OpErG886JSc6Ft7w"
        )
        .then(
          (result: any) => {
            
            reset()
            toast.success("Email enviado com sucesso!");
          },
          (error) => {
            toast.error("Ocorreu um erro ao enviar o email.");
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
