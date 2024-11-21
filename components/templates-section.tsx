"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const TEMPLATE_IMAGES = {
  business: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
  marketing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  education: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
  sales: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
};

export function TemplatesSection() {
  const templates = [
    {
      title: "Business Pitch",
      image: TEMPLATE_IMAGES.business,
      category: "Business"
    },
    {
      title: "Marketing Plan",
      image: TEMPLATE_IMAGES.marketing,
      category: "Marketing"
    },
    {
      title: "Education",
      image: TEMPLATE_IMAGES.education,
      category: "Education"
    },
    {
      title: "Sales Deck",
      image: TEMPLATE_IMAGES.sales,
      category: "Sales"
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Professional Templates</h2>
          <p className="text-gray-400 text-lg">Choose from our collection of stunning templates</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-purple-400">{template.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-1">{template.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}