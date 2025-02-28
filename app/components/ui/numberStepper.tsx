"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface NumberStepperProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
  initialValue?: number;
}

export default function NumberStepper({
  min,
  max,
  onChange,
  initialValue = min,
}: NumberStepperProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const updateValue = (newValue: number) => {
    const clampedValue = Math.max(min, Math.min(max, newValue));
    setValue(clampedValue);
  };

  const increment = () => updateValue(value + 1);
  const decrement = () => updateValue(value - 1);

  return (
    <div className="inline-flex w-fit items-center bg-gray-100 rounded-lg p-1 shadow-sm">
      <motion.button
        type="button"
        className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        whileTap={{ scale: 0.95 }}
        onClick={decrement}
        disabled={value === min}
        aria-label="Decrease value"
      >
        <Minus className="w-4 h-4" />
      </motion.button>

      <div className="relative w-12 h-10 flex items-center justify-center mx-2">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute"
          >
            <span className="text-2xl font-semibold text-gray-800">
              {value}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        type="button"
        className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        whileTap={{ scale: 0.95 }}
        onClick={increment}
        disabled={value === max}
        aria-label="Increase value"
      >
        <Plus className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
