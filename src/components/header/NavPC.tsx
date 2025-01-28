import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const NavPC = () => {
  const router = useRouter();

  return (
    <ul className="hidden text-white flex-col items-center md:flex md:flex-row md:gap-14 md:text-lg md:p-0">
      <motion.div
        className="hover:text-blue-300 border-b-[2px] border-zinc-200 w-full text-center md:border-0 hover:cursor-pointer"
        onClick={() => router.push("#apresentation")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        Home
      </motion.div>
      <motion.div
        className="hover:text-blue-300 border-b-[2px] border-zinc-200 w-full text-center md:border-0 hover:cursor-pointer"
        onClick={() => router.push("#about")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        Sobre
      </motion.div>

      <motion.div
        className="hover:text-blue-300 border-b-[2px] border-zinc-200 w-full text-center md:border-0 hover:cursor-pointer"
        onClick={() => router.push("#projects")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        Projetos
      </motion.div>
    </ul>
  );
};

export default NavPC;
