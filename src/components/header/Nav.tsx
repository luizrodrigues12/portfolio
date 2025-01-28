"use client";

import { Bars } from "flowbite-react-icons/outline";
import { motion } from "motion/react";
import { useState } from "react";
import ModalNav from "./ModalNav";
import NavPC from "./NavPC";
import Link from "next/link";

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const clickLink = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <nav
      className="flex flex-col justify-center items-center w-full fixed z-20 bg-[#1010109f]"
      style={{ boxShadow: "1px 2pxc 5px rgb(0, 0, 0, 0.2)" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full md:flex md:justify-between md:w-[85%] lg:w-[70%] xl:w-[62%] "
      >
        <div className="px-10 md:pl-0 text-zinc-200 flex justify-between items-center h-[9vh] ">
          <Link
            href={"/"}
            className="flex items-center text-[20px] md:text-[24px] font-parkinsans cursor-pointer hover:text-white"
          >
            Luiz.
          </Link>

          {/* MOBILE */}
          {modalOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Bars className="md:hidden w-8 h-8" onClick={toggleModal} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Bars className="md:hidden w-8 h-8" onClick={toggleModal} />
            </motion.div>
          )}
        </div>
        <ModalNav modalOpen={modalOpen} clickLink={clickLink} />

        {/* COMPUTADOR */}
        <NavPC />
      </motion.div>
    </nav>
  );
};

export default Nav;
