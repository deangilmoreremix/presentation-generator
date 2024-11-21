"use client";

import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const PREVIEW_IMAGES = {
  business: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2000",
  swot: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
  timeline: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
  threeColumn: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  metrics: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=2000"
};

const previews = [
  {
    title: "Business Pitch Deck",
    image: PREVIEW_IMAGES.business,
    content: {
      title: "Market Overview",
      subtitle: "Q4 2023 Analysis",
      points: [
        "Market Size: $50B annually",
        "Growth Rate: 15% YoY",
        "Key Competitors: 5 major players",
        "Target Segment: Enterprise"
      ],
      metrics: {
        revenue: "$2.5M",
        growth: "+45%",
        users: "50K+"
      }
    }
  },
  {
    title: "SWOT Analysis",
    image: PREVIEW_IMAGES.swot,
    content: {
      strengths: ["Market Leadership", "Innovation Pipeline", "Strong Team"],
      weaknesses: ["High CAC", "Limited Markets"],
      opportunities: ["Global Expansion", "New Products"],
      threats: ["Competition", "Regulation"]
    }
  },
  {
    title: "Timeline View",
    image: PREVIEW_IMAGES.timeline,
    content: {
      phases: [
        { title: "Research", date: "Q1 2024" },
        { title: "Development", date: "Q2 2024" },
        { title: "Beta Launch", date: "Q3 2024" },
        { title: "Global Release", date: "Q4 2024" }
      ]
    }
  },
  {
    title: "Three Column Layout",
    image: PREVIEW_IMAGES.threeColumn,
    content: {
      columns: [
        { title: "Discovery", items: ["Market Research", "User Interviews"] },
        { title: "Development", items: ["MVP Build", "Testing"] },
        { title: "Delivery", items: ["Launch", "Scale"] }
      ]
    }
  },
  {
    title: "Metrics Dashboard",
    image: PREVIEW_IMAGES.metrics,
    content: {
      metrics: [
        { label: "Revenue", value: "$1.2M", growth: "+25%" },
        { label: "Users", value: "50K", growth: "+40%" },
        { label: "NPS", value: "72", growth: "+5" },
        { label: "CAC", value: "$250", growth: "-10%" }
      ]
    }
  }
];

export function PreviewSection() {
  const [currentPreview, setCurrentPreview] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPreview((prev) => (prev + 1) % previews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">See It in Action</h2>
          <p className="text-gray-400 text-lg">Watch how our AI transforms your content into professional slides</p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          {/* Preview Window */}
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20" />
            <Card className="relative rounded-2xl overflow-hidden border border-white/10 bg-black">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              {/* Preview Content */}
              <div className="aspect-video relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPreview}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={previews[currentPreview].image}
                      alt={previews[currentPreview].title}
                      fill
                      className="object-cover opacity-75"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent" />
                    
                    {/* Dynamic Slide Content */}
                    <div className="absolute inset-0 p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="h-full"
                      >
                        {/* Render preview content based on type */}
                        {/* Content rendering logic remains the same */}
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Card>
          </div>

          {/* Preview Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {previews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPreview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPreview === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}