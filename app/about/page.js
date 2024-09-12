"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <motion.section
        className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center"
        initial={{ opacity: 0, y:-200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            DevMind: Your Go-To Hub for Tech and Coding
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Dive deep into the latest trends, tutorials, and insights in
            software development. Whether you're an aspiring coder, a seasoned
            developer, or a tech enthusiast, DevMind offers expert advice,
            hands-on guides, and thought-provoking articles that inspire and
            empower.
          </p>
        </motion.div>
        <motion.div
          className="w-full mt-4 lg:mt-0 lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/1.jpg"
            alt="Tech and Coding"
            width={800}
            height={600}
            className="w-full h-full max-w-md mx-auto rounded-lg"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">
              About DevMind
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Your ultimate destination for tech insights and coding tutorials.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="md:w-1/3">
              <div className="relative w-480 h-48 rounded-full overflow-hidden">
                <Image
                  src="/2.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Hello! I'm Harsh, a passionate software developer and tech
                enthusiast. I created DevMind to share my & other's experiences,
                tips, and tutorials on various programming languages and
                technologies. Whether you're starting out or looking to sharpen
                your skills, you'll find a variety of resources and insights
                here, Its like building a community for developers.
              </p>
            </div>
          </motion.div>

          {/* Replace with your journey sections */}
          {/* Example placeholders provided */}
          <motion.div
            className="flex flex-col md:flex-row items-center mt-16 space-y-12 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Journey section 1 */}
            <div className="md:w-1/3">
              <Image
                src="/3.jpg"
                alt="Journey 1"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                The Spark of Curiosity
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Harsh’s coding journey began in high school when he stumbled
                upon his first programming language—Python. What started as a
                simple curiosity quickly turned into a passion, as Harsh spent
                countless hours experimenting with code, building small
                projects, and learning.
              </p>
            </div>
          </motion.div>

          {/* Journey section 2 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center mt-16 space-y-12 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="md:w-1/3">
              <Image
                src="/4.jpg"
                alt="Journey 2"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Diving Deeper
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                After mastering the basics, Harsh’s thirst for knowledge grew.
                He began exploring more complex topics such as data structures,
                algorithms, and web development. Enrolling in online courses and
                attending coding bootcamps, Harsh quickly expanded his skill
                set, taking on freelance projects to apply his knowledge in
                real-world scenarios.
              </p>
            </div>
          </motion.div>

          {/* Journey section 3 */}
          <motion.div
            className="flex flex-col md:flex-row items-center mt-16 space-y-12 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="md:w-1/3">
              <Image
                src="/5.jpg"
                alt="Journey 3"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Taking on Challenges
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                With several years of experience under his belt, Harsh began
                tackling more significant challenges. From contributing to
                open-source projects to developing his own applications, Harsh
                continued to push his limits, always looking for opportunities
                to learn and grow. His journey wasn’t without its setbacks, but
                each obstacle was a stepping stone to becoming the skilled
                developer he is today.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-center justify-center py-12 mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Check Out My Portfolio
          </h2>
          <Link href="https://personal-portfolio-frammer.vercel.app/" legacyBehavior>
            <a
              className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My Portfolio
            </a>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
