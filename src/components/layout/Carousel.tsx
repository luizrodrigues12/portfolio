import Image from "next/image";
import { slides } from "@/utils/slides";
import { motion } from "motion/react";
import { AngleLeft, AngleRight } from "flowbite-react-icons/outline";
import { SetStateAction } from "react";

interface Props {
  onClickNextBtn: () => void;
  onClickPrevBtn: () => void;
  setSlideNum: (value: SetStateAction<number>) => void;
  slideNum: number;
}

const Carousel = ({
  onClickNextBtn,
  onClickPrevBtn,
  setSlideNum,
  slideNum,
}: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute flex justify-between px-3 w-full items-center z-[2]">
          <motion.div
            className="flex flex-col items-center justify-center bg-[#00000080] text-zinc-200 text-[40px] rounded-full cursor-pointer px-0.5 py-3"
            onClick={onClickPrevBtn}
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              transition: { duration: 0.1 },
            }}
          >
            <div>
              <AngleLeft className="size-[35px] md:size-[45px]" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center bg-[#00000080] text-zinc-200 text-[40px] rounded-full cursor-pointer px-0.5 py-3"
            onClick={onClickNextBtn}
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              transition: { duration: 0.1 },
            }}
          >
            <div>
              <AngleRight className="size-[35px] md:size-[45px]" />
            </div>
          </motion.div>
        </div>

        <div className="absolute self-end mb-4 flex gap-1.5 z-[2]">
          {slides.map((item, i) => (
            <div
              key={i}
              className={`size-2 bg-zinc-400 rounded-full cursor-pointer ${
                i == slideNum ? "bg-zinc-50" : ""
              }`}
              onClick={() => setSlideNum(i)}
            />
          ))}
        </div>

        <motion.div className={`w-full h-full flex relative z-[1]`}>
          <Image
            src={slides[slideNum].src}
            alt="Foto"
            width={800}
            height={800}
            priority={true}
            className={`w-full`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
