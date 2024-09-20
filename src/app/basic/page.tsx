"use client";
import { archivoBlack } from "@/app/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BasicPage() {
  return (
    <div>
      <p
        className={`text-redPrimary text-4xl font-bold ${archivoBlack.className}`}
      >
        Basic Animation
      </p>
      <div className="p-4" />
      <MyComponent />
      <AnimateComponent />
      <ControllableAnimation />
    </div>
  );
}

const MyComponent = () => {
  return (
    <motion.div
      className="bg-redSecondary m-6 h-24 w-24 rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5 }}
      whileHover={{ opacity: 1, scale: 1 }}
    />
  );
};

const AnimateComponent = () => {
  return (
    <motion.div
      className="bg-foregroundSecondary m-6 h-24 w-24"
      animate={{
        scale: [1, 2, 3, 2, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["0%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        delay: 1,
      }}
    />
  );
};

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

function Input({ value, children, set, min = -200, max = 200 }: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}

function ControllableAnimation() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex items-center">
      <div>
        <motion.div
          className="pointer-events-none h-36 w-36 rounded-lg border-4 border-dotted border-red-400"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="flex flex-col pl-9">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
    </div>
  );
}
