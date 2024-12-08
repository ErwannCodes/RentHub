"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DotPattern } from "../magicui/dot-pattern";


const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a>
      <p className="text-base font-semibold text-blue-500">PROPRIETAIRE DE BIENS LOCATIFS</p>
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="relative flex w-full max-w-6xl flex-col space-y-2 overflow-hidden pt-3">
      <motion.h1
        className="text-center text-4xl font-medium leading-tight text-[#0E0B3D] sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {[
          "L'outil pour mettre sa",
          "gestion",
          "immobilière sur autopilote",
        ].map((text, index) => (
          <motion.span
            key={index}
            className={cn(
              "inline-block px-1 md:px-2 font-coolvetica tracking-wide text-[4rem] leading-tight"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
            {index === 1 && <br />} {/* Add <br /> after "gestion" */}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="mx-auto text-center text-lg leading-7  text-[#0E0B3D] sm:leading-9 text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Moins de travail, plus de locations: édition de documents, rappels
        automatiques, <br /> interactions avec les locataires… Tout est
        automatisé, centralisé et <br />
        géré sans effort, pour vous.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="mt-14 relative flex justify-center w-full">
      {/* Image with better control over dimensions */}
      <div className="w-4/6">
      <Image
        src="/opening_smile.jpg"
        alt="bg-rectangle"
        layout="responsive"
        width={500}
        height={500}
        className="w-full h-auto object-cover"
      />
      </div>
      

      {/* Input and button container positioned absolutely on top of the image */}
      <motion.div
        className="absolute top-1 flex items-center space-x-4 p-2 bg-white/80 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <input
          type="email"
          className="pl-4 pr-2 py-2 w-72 rounded-l-2xl focus:outline-none text-sm"
          placeholder="Your email address"
        />
        <Link
          href="/signup"
          className={cn(
            "px-6 py-2 rounded-r-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
          )}
        >
          <Icons.logo className="h-5 w-5" />
          Join the waitlist
        </Link>
      </motion.div>

      {/* Text under the form */}
      {/* <motion.p
        className="mt-5 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        7 day free trial. No credit card required.
      </motion.p> */}
    </div>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="border rounded-lg shadow-lg max-w-screen-lg mt-16"
      />
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero">
      
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  );
}
