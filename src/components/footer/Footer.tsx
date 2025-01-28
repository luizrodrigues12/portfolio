"use client";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  const ano = new Date().getFullYear().toString();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-zinc-200 bg-[#101012] h-20 text-sm text-center border-t-[2px] border-zinc-900 w-full flex items-center justify-center"
    >
      Luiz Rodrigues / {ano}
    </motion.div>
  );
};

export default Footer;
