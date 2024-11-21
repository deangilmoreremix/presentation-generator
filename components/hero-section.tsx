"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3e3e3e,#000000)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-500/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-white">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              AI-Powered Presentation Generator
            </span>
          </motion.div>

          {/* Main heading with Typewriter effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            <Typewriter
              options={{
                strings: [
                  'Create Beautiful Presentations',
                  'Generate Slides Instantly',
                  'Save Hours of Work',
                  'No Design Skills Needed'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                cursor: '|'
              }}
            />
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform any topic into a professional presentation in seconds with our AI-powered platform. No design skills needed.
          </p>

          {/* Input and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12"
          >
            <Input
              placeholder="Enter your presentation topic..."
              className="h-14 bg-white/5 border-purple-500/20 text-white placeholder:text-gray-500"
            />
            <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              Generate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              AI-Powered Generation
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Professional Templates
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Export to PowerPoint
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}