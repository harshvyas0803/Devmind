"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-16 px-4">
    <motion.h1
      className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Contact Me
    </motion.h1>
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h2
        className="text-xl font-semibold text-gray-800 dark:text-white mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
      </motion.p>
      <div className="space-y-4">
        <motion.a
          href="https://www.linkedin.com/in/harsh-vyas-348846263/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 dark:text-blue-400 hover:underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="https://github.com/harshvyas0803"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-800 dark:text-gray-200 hover:underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://personal-portfolio-frammer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 dark:text-blue-400 hover:underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          My Portfolio
        </motion.a>
      </div>
    </motion.div>
  </div>
  );
};

export default page;
