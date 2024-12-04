import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";

type Props = { modalOpen: boolean; clickLink: () => void };

const ModalNav = ({ modalOpen, clickLink }: Props) => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-end ">
      <AnimatePresence>
        {modalOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            onClick={clickLink}
            className="flex text-zinc-200 flex-col items-center justify-start text-[16px] w-[100%] bg-[#1010109f] shadow-xl fixed z-10"
            id="modal"
          >
            <div className="flex flex-col gap-1 w-full">
              <motion.div
                whileTap={{ scale: 1.1 }}
                className="border-y-2 border-[#303030] py-3 w-full text-center md:border-0"
                onClick={() => router.push("#apresentation")}
              >
                Home
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.1 }}
                className="border-b-2 border-[#303030] py-3 w-full text-center md:border-0"
                onClick={() => router.push("#about")}
              >
                Sobre
              </motion.div>

              <motion.div
                whileTap={{ scale: 1.1 }}
                className="border-b-2 border-[#303030] py-3 w-full text-center md:border-0"
                onClick={() => router.push("#projects")}
              >
                Projetos
              </motion.div>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalNav;
