"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        setProgress(20);

        setTimeout(() => {
            setProgress(40);
        }, 100);

        setTimeout(() => {
            setProgress(100);
        }, 400);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => {
            setProgress(0);
        }, 50);
    }, []);

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
                color='#933ce6'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                <motion.div
            className="text-lg font-bold"
            initial={{ opacity: 0, scale: 0.1}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            DevMind
          </motion.div>
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300"> Home </Link>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                    >
                        <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                            About
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                            Blogs
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5, ease: 'easeOut' }}
                    >
                        <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                            Contact
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, ease: 'easeOut' }}
                    >
                        <div className='flex items-center'>
                            <Button className="mx-1" variant="outline">Login</Button>
                            <Button className="mx-1" variant="outline">Signup</Button>
                            <ModeToggle />
                        </div>
                    </motion.div>
                </div>

                <div className="md:hidden">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            <motion.svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 3.5, ease: 'easeOut' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </motion.svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">HarryBlog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 4, ease: 'easeOut' }}
                                        >
                                            <Link href="/"> Home </Link>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 4.5, ease: 'easeOut' }}
                                        >
                                            <Link href="/about"> About </Link>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 5, ease: 'easeOut' }}
                                        >
                                            <Link href="/blog"> Blog </Link>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 5.5, ease: 'easeOut' }}
                                        >
                                            <Link href="/contact"> Contact </Link>
                                        </motion.div>
                                        <div>
                                            <Button className="mx-1 text-xs" variant="outline">Login</Button>
                                            <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
