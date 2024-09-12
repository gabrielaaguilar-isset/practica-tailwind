"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import clsx from "clsx";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  question: string;
  answer: string;
}

export const AcordionItems = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/70"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
           
            initial={{
              opacity:0,
              height:0,
              marginTop: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: "16px"

            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
