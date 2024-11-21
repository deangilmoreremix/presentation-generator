"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, LogIn, Wand2, Download } from "lucide-react";

export function GettingStartedSection() {
  const steps = [
    {
      title: "Login/Signup",
      description: "Just login or signup to Casetomonial. It's free, no credit card required.",
      icon: <LogIn className="h-6 w-6" />,
      action: "Login/Signup Casetomonial",
      actionLink: "#"
    },
    {
      title: "Create Presentation",
      description: "Choose your content source: Topic, Text, YouTube Video, PDF, Docx and more.",
      icon: <Wand2 className="h-6 w-6" />,
      action: "Start Creating",
      actionLink: "#"
    },
    {
      title: "Download & Present",
      description: "Export your presentation in PowerPoint format and start presenting.",
      icon: <Download className="h-6 w-6" />,
      action: "Try Now",
      actionLink: "#"
    }
  ];

  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get Started in 3 Simple Steps</h2>
          <p className="text-gray-400 text-lg">Create your first AI-powered presentation in minutes</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 hidden md:block -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all group">
                <div className="text-purple-500 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-6">{step.description}</p>
                <Button 
                  variant="ghost" 
                  className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 group-hover:bg-purple-500/20"
                >
                  {step.action} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}