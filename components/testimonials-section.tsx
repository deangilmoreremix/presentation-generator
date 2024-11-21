"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Loved by Thousands</h2>
          <p className="text-gray-400 text-lg">See what our users have to say</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="SlideAI has completely transformed how I create presentations. What used to take hours now takes minutes."
            author="Sarah Johnson"
            role="Marketing Director"
            rating={5}
            delay={0}
          />
          <TestimonialCard
            quote="The quality of the presentations is outstanding. The AI understands context and creates relevant, engaging content."
            author="Michael Chen"
            role="Product Manager"
            rating={5}
            delay={0.1}
          />
          <TestimonialCard
            quote="As a teacher, this tool has saved me countless hours. The templates are professional and the content generation is spot-on."
            author="Emily Rodriguez"
            role="Education Professional"
            rating={5}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ 
  quote, 
  author, 
  role, 
  rating, 
  delay 
}: { 
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 bg-white/5 border-white/10">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <blockquote className="text-gray-300 mb-4">{quote}</blockquote>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </Card>
    </motion.div>
  );
}