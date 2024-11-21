"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about SlideAI</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              How does SlideAI work?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              SlideAI uses advanced AI to analyze your content and automatically generate professional presentations. Simply input your topic or content, and our AI will create engaging slides with appropriate layouts, content structure, and design elements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              Can I customize the generated presentations?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Yes! After AI generates your presentation, you can fully customize every aspect including colors, fonts, layouts, and content. Our editor provides intuitive tools for making your presentations perfect.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              What file formats can I export to?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              You can export your presentations to PowerPoint (PPTX) and PDF formats. All formatting and styling will be preserved in the exported files.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              Is my content secure?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Yes, we take security seriously. Your content is encrypted and never stored longer than necessary for generation. We don't use your content for training our AI models.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}