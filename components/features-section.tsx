"use client";

import { Card } from "@/components/ui/card";
import { Wand2, Layout, Palette, Download } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Everything You Need
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Wand2 className="h-6 w-6" />}
            title="AI Generation"
            description="Generate professional content with AI"
            delay={0}
          />
          <FeatureCard
            icon={<Layout className="h-6 w-6" />}
            title="Smart Layouts"
            description="Beautiful slide layouts that adapt to your content"
            delay={0.1}
          />
          <FeatureCard
            icon={<Palette className="h-6 w-6" />}
            title="Custom Styling"
            description="Customize colors, fonts, and themes"
            delay={0.2}
          />
          <FeatureCard
            icon={<Download className="h-6 w-6" />}
            title="Easy Export"
            description="Export to PowerPoint or PDF format"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </Card>
    </motion.div>
  );
}