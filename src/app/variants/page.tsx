"use client";

import { archivoBlack } from "@/app/fonts";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function VariantsPage() {
  return (
    <div>
      <p
        className={`text-redPrimary mb-10 text-4xl font-bold ${archivoBlack.className}`}
      >
        Animation using VARIANTS
      </p>
      <div className="flex items-center justify-center">
        <Menu />
      </div>
    </div>
  );
}

const list: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 12px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 12px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-80"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border-none bg-white px-3 py-3 text-left text-lg font-bold text-foreground shadow-md"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" className="fill-black" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={list}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="m-0 mt-2 flex list-none flex-col gap-3 bg-white p-3"
      >
        <motion.li className="block p-3" variants={itemVariants}>
          Item 1{" "}
        </motion.li>
        <motion.li className="block p-3" variants={itemVariants}>
          Item 2{" "}
        </motion.li>
        <motion.li className="block p-3" variants={itemVariants}>
          Item 3{" "}
        </motion.li>
        <motion.li className="block p-3" variants={itemVariants}>
          Item 4{" "}
        </motion.li>
        <motion.li className="block p-3" variants={itemVariants}>
          Item 5{" "}
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
