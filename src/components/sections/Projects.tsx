"use client";

import Container from "../layout/Container";
import { motion } from "motion/react";
import { slides } from "@/utils/slides";
import { useEffect, useState } from "react";
import Carousel from "../layout/Carousel";

const Projects = () => {
  const [slideNum, setSlideNum] = useState<number>(0);

  useEffect(() => setSlideNum(0), []);

  return (
    <section
      className="flex flex-col justify-start items-center min-h-screen w-full text-zinc-200 snap-start 
    border-t-[2px] border-[#212121] scroll-mt-[7vh] bg-[#101012]"
      id="projects"
    >
      <Container className="text-zinc-200">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-parkinsans text-[1.8em] md:text-[2.5em] 2xl:text-[50px] pt-3 md:p-5 md:pt-6 lg:text-[3.2em]"
          >
            Projetos
          </motion.div>

          <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-0 gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full h-full border-2 border-[#262626] flex flex-col md:flex-row justify-between rounded-sm"
            >
              {/* CAROUSEL */}
              <div className="w-full h-full md:w-[55%] 2xl:w-[45%] lg:w-[55%]">
                <Carousel
                  onClickNextBtn={() => {
                    if (slideNum! < slides.length - 1)
                      setSlideNum(slideNum! + 1);
                  }}
                  setSlideNum={setSlideNum}
                  onClickPrevBtn={() => {
                    if (slideNum > 0) setSlideNum(slideNum! - 1);
                  }}
                  slideNum={slideNum ? slideNum : 0}
                />
              </div>

              <div className="flex flex-col justify-start gap-4  py-5 bg-[#090909] w-full md:w-[45%] lg:w-[45%] 2xl:w-[55%] border-l-[#262626] border-l-2 px-4 md:px-6">
                <h3 className="font-parkinsans text-[1.5em] md:text-[1.6em] underline underline-offset-4 ">
                  <a
                    target="_blank"
                    href={slides[slideNum ? slideNum : 0].link}
                    className="text-[#a1aed6] hover:text-[#c9cedd]"
                  >
                    {slides[slideNum ? slideNum : 0].title}
                  </a>
                </h3>
                <p className="font-parkinsans-normal text-[1em] md:text-[1.1em] w-full md]">
                  {slides[slideNum ? slideNum : 0].description}
                </p>
                <div className="flex gap-1.5 pt-1 flex-wrap justify-start text-[0.9em] md:text-[1em]">
                  {slides[slideNum ? slideNum : 0].skills
                    .split(",")
                    .map((skill, i) => (
                      <div
                        key={i}
                        className="border-2 border-zinc-700 p-1.5 px-2 rounded-lg text-center font-parkinsans"
                      >
                        {skill}
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
