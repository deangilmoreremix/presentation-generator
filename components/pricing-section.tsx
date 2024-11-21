"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function PricingSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">Choose the plan that's right for you</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Free"
            price="$0"
            description="Perfect for trying out"
            features={[
              "5 presentations per month",
              "Basic templates",
              "Export to PowerPoint",
              "24/7 support"
            ]}
            buttonText="Get Started"
            delay={0}
          />
          <PricingCard
            title="Pro"
            price="$29"
            description="For professionals"
            features={[
              "Unlimited presentations",
              "Premium templates",
              "Priority support",
              "Custom branding",
              "Advanced analytics"
            ]}
            buttonText="Start Pro"
            highlighted={true}
            delay={0.1}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For teams & businesses"
            features={[
              "Everything in Pro",
              "Custom templates",
              "Team collaboration",
              "API access",
              "Dedicated support"
            ]}
            buttonText="Contact Sales"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  highlighted = false,
  delay 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className={`p-8 ${
        highlighted 
          ? "bg-white/10 border-purple-500/50" 
          : "bg-white/5 border-white/10"
      }`}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== "Custom" && <span className="text-gray-400">/month</span>}
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <Button 
          className={`w-full mb-6 ${
            highlighted 
              ? "bg-purple-600 hover:bg-purple-700" 
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          {buttonText}
        </Button>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-300">
              <Check className="h-5 w-5 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}