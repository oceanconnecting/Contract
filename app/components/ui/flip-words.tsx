"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <AnimatePresence mode="wait">
    <motion.div
  key={words[currentIndex]}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  // exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2 }}
  exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2 }}

  transition={{ type: "spring", stiffness: 100, damping: 10 }}
  className={cn(
    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
    className
  )}
>

        {words[currentIndex].split(" ").map((word, wordIndex) => (
          <motion.span
            key={`word-${wordIndex}`}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`letter-${wordIndex}-${letterIndex}`}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
transition={{ delay: wordIndex * 0.3, duration: 0.3 }}

                // initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                // animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                // transition={{ delay: wordIndex * 0.3 + letterIndex * 0.05, duration: 0.2 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
