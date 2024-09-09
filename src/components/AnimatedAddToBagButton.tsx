"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedAddToBagButtonProps {
  initialText: React.ReactElement | string;
  addedText: React.ReactElement | string;
}

export const AnimatedAddToBagButton: React.FC<AnimatedAddToBagButtonProps> = ({
  initialText,
  addedText,
}) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  return (
    <AnimatePresence mode="wait">
      {isAdded ? (
        <motion.button
          className="relative flex w-full items-center justify-center overflow-hidden rounded-md bg-white p-[10px] outline outline-1 outline-black"
          onClick={() => setIsAdded(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="added"
            className="relative block h-full w-full font-semibold text-black"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            {addedText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-full cursor-pointer items-center justify-center rounded-md bg-black text-white p-[10px]"
          onClick={() => setIsAdded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="add"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};