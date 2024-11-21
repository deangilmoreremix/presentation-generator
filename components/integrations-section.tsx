"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function IntegrationsSection() {
  const integrations = [
    { 
      name: "Microsoft PowerPoint", 
      logo: "/images/logos/powerpoint-logo.png",
      width: 150,
      height: 50 
    },
    { 
      name: "Google Slides", 
      logo: "/images/logos/google-slides-logo.png",
      width: 140,
      height: 45
    },
    { 
      name: "Apple Keynote", 
      logo: "/images/logos/keynote-logo.png",
      width: 130,
      height: 45
    },
    { 
      name: "Canva", 
      logo: "/images/logos/canva-logo.png",
      width: 120,
      height: 40
    },
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
          <h2 className="text-3xl font-bold text-white mb-4">Works With Your Favorite Tools</h2>
          <p className="text-gray-400 text-lg">Export and edit your presentations in any format</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={integration.logo}
                alt={integration.name}
                width={integration.width}
                height={integration.height}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}