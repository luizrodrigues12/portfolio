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
      className="text-zinc-200 py-5 pt-5 text-sm text-center border-t-[3px] border-zinc-900 w-full"
    >
      Luiz Rodrigues / {ano}
    </motion.div>
  );
};

export default Footer;
