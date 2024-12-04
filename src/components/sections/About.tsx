"use client";

import Image from "next/image";
import { motion } from "motion/react";

import Container from "../layout/Container";

const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center lg:flex-row-reverse md:items-center
    text-zinc-300 min-h-screen w-full bg-about border-t-[3px] border-[#212121] snap-center about-section"
      id="about"
    >
      <Container>
        <div className="flex flex-col lg:flex-row-reverse w-full justify-between place-content-between gap-7 lg:gap-10">
          {/* IMAGEM CELULAR */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex lg:hidden flex-col justify-center items-center px-3"
          >
            <Image
              src={"/images/desenho-luiz.png"}
              height={500}
              width={500}
              alt="Desenho de Luiz Rodrigues"
              className="w-full md:w-[75%] self-center md:self-center desenho-luiz rounded-2xl"
            ></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4 lg:gap-4 px-7 lg:px-0 pb-6"
          >
            <h2 className="font-parkinsans leading-3 py-2 text-[1.8em] md:self-center md:w-[80%] md:text-[2.5em] lg:pb-2 lg:text-[3em] lg:self-start xl:pb-8 xl:text-[80px]">
              Sobre.
            </h2>

            <div className="text-[1.1em] md:text-[1.3em] w-full font-parkinsans-normal text-zinc-400 md:self-center md:w-[80%] lg:self-start lg:w-[270px] xl:w-[400px]">
              Sou um{" "}
              <span className="font-parkinsans-normal text-[#95a7dd]">
                Desenvolvedor FrontEnd
              </span>{" "}
              nascido em Petrolina - PE, Brasil.
            </div>
            <div className="w-full text-zinc-300  font-parkinsans-normal self-start md:self-center md:w-[80%] lg:w-[270px] lg:self-start lg:text-[1em] xl:w-[400px]">
              Estou no mundo desde 2005 e, até pouco tempo, não fazia ideia de
              que minha vocação estaria na área de TI. Felizmente, encontrei-me
              e agora produzo sites e resolvo necessidades diárias com códigos.
            </div>
          </motion.div>

          <div className="hidden lg:flex md:flex-row md:justify-between gap-40">
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <Image
                src={"/images/desenho-luiz.png"}
                height={500}
                width={500}
                alt="Desenho de Luiz Rodrigues"
                className="w-[350px] lg:w-[100%] xl:w-[90%] desenho-luiz"
              ></Image>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
