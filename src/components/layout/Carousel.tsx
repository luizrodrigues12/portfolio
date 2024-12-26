import Image from "next/image";
import { slides } from "@/utils/slides";
import { motion } from "motion/react";
import { AngleLeft, AngleRight } from "flowbite-react-icons/outline";

interface Props {
  onClickNextBtn: () => void;
  onClickPrevBtn: () => void;
  slideNum: number;
}

const Carousel = ({ onClickNextBtn, onClickPrevBtn, slideNum }: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute flex justify-between px-3 w-full items-center">
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

        <motion.div className="w-full h-full">
          <Image
            src={slides[slideNum].src}
            alt="Foto"
            width={800}
            height={800}
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
