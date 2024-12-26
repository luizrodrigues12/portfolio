"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "../layout/Container";

const Apresentation = () => {
  return (
    <section
      id="apresentation"
      className="flex flex-col items-center justify-center md:items-center md:flex-row w-full min-h-[100vh] snap-center"
    >
      <Container>
        <div className="flex flex-col lg:flex-row-reverse gap-3 md:gap-8 lg:gap-8 2xl:gap-24 justify-center w-full items-center mb-10 ">
          <motion.div
            className="border-animate shadow-lg w-[250px] h-[250px] md:w-[340px] md:h-[340px] lg:w-[50%] lg:h-[50%] xl:w-[100%] xl:h-[100%] 2xl:w-[70%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={"/images/foto-luiz-rodrigues.png"}
              alt="Foto de Luiz"
              width={600}
              height={600}
              priority
              unoptimized={true}
              className="rounded-full bg-[#030303] w-[250px] h-[250px] md:w-[340px] md:h-[340px] lg:w-[100%] lg:h-[100%] xl:w-[100%] xl:h-[100%] 2xl:w-[100%]"
            />
          </motion.div>

          <div className="flex flex-col gap-5 justify-center items-center md:w-[350px] lg:w-[55%] xl:w-[50%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-zinc-300 w-full flex flex-col items-center gap-2 md:gap-0"
            >
              <h2 className="hidden lg:block text-[1.2em] font-parkinsans-normal lg:self-start md:text-[1.3em] lg:text-[1.7em] md:mb-7 lg:mb-10">
                Frontend Developer
              </h2>

              <div className="text-[2.5em] font-parkinsans leading-3 pt-6 pb-2 md:pt-0 md:pb-5 md:text-[2.8em] lg:self-start lg:text-[3.3em] lg:pb-9 xl:w-[600px] xl:text-[3.4em] 2xl:text-[4em]">
                Olá, eu sou
              </div>

              <h1 className="self-center text-[2.5em] font-parkinsans md:text-[2.8em] lg:self-start lg:text-[3em] xl:text-[3.4em] 2xl:text-[4em] xl:w-[100%] h1">
                Luiz Rodrigues.
              </h1>

              <h2 className="lg:hidden text-[1.2em] font-parkinsans-normal md:text-[1.5em] lg:self-start">
                Frontend Developer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="flex flex-col md:flex-row justify-center items-center w-full gap-3
          text-[14px] lg:text-[14px]"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                href="/documents/curriculo-luiz.pdf"
                download
                className="p-2 text-zinc-300 font-parkinsans border-[2px] border-zinc-300 rounded-lg w-[100%] md:w-[100%]
            hover:bg-[#d4d4d8] hover:text-black text-center"
              >
                Baixar Currículo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                href="mailto:luizrodrigues090705@gmail.com"
                className="p-2 text-zinc-300 font-parkinsans border-[2px] border-zinc-300 rounded-lg w-[100%] md:w-[100%] 
            hover:bg-[#d4d4d8] hover:text-black text-center"
              >
                Entrar em Contato
              </motion.a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Apresentation;
