"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideGeneratorProps {
  type: 'pros-cons' | 'bullet-points' | 'lists' | 'metrics' | 'three-column' | 'timeline' | 'swot';
  title: string;
  description: string;
}

export function SlideGenerator({ type, title, description }: SlideGeneratorProps) {
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Generating slide type:', type, 'for topic:', topic);
    } catch (error) {
      console.error('Slide generation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 bg-white/5 border-white/10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>

        <Input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter your topic..."
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
        />

        <Button 
          type="submit"
          className={cn(
            "w-full bg-gradient-to-r from-purple-600 to-blue-600",
            "hover:from-purple-700 hover:to-blue-700",
            "text-white font-medium"
          )}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              Generate {title}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}