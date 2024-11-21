"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Upload, Lightbulb, ArrowRight, FileText, Youtube, FileType, ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import { generatePresentation, getTaskStatus } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

export function InputSection() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const maxCharacters = 2500;

  const pollTaskStatus = async (taskId: string) => {
    try {
      const status = await getTaskStatus(taskId);
      setProgress(status.task_info.progress);

      if (status.task_status === 'SUCCESS') {
        toast({
          title: "Success!",
          description: "Your presentation has been generated successfully.",
        });
        setIsLoading(false);
      } else if (status.task_status === 'FAILURE') {
        throw new Error('Task failed');
      } else if (['PENDING', 'RECEIVED', 'STARTED'].includes(status.task_status)) {
        setTimeout(() => pollTaskStatus(taskId), 2000);
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to generate presentation. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async () => {
    if (!text.trim()) return;

    setIsLoading(true);
    setProgress(0);

    try {
      const taskId = await generatePresentation({
        plain_text: text,
        theme: 'default',
        length: 5,
      });
      pollTaskStatus(taskId);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate presentation",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3e3e3e,#000000)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <a
            href="#"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span className="text-white">🌐 Casetomonial Support 100+ Languages</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              <Typewriter
                options={{
                  strings: [
                    'Professional AI',
                    'Beautiful Slides',
                    'Perfect Presentations',
                    'Instant Results'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                  cursor: '|'
                }}
              />
            </div>
            <span className="block mt-2">Presentations in Seconds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-12"
          >
            Just Enter Topic, Youtube URL, PDF, or Text to get a beautiful PPT in seconds. Use
            the bulb for AI suggestions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative">
              <p className="text-left text-sm text-gray-500 mb-2">
                character count: {text.length}/{maxCharacters}
              </p>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Topic, Youtube URL, PDF, or Text to get a PPT in seconds. use the bulb for suggestions."
                className="min-h-[200px] bg-white/5 border-dashed border-2 border-white/20 rounded-xl text-white placeholder:text-gray-500"
                maxLength={maxCharacters}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
                <p className="text-sm text-gray-500">
                  upload pdf, docx, png, mp4, pptx, mp3
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                >
                  <Lightbulb className="w-4 h-4" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
                  onClick={handleSubmit}
                  disabled={isLoading || !text.trim()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate Instant PPT
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {isLoading && (
              <div className="mt-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">{progress}% complete</p>
              </div>
            )}

            <p className="text-sm text-gray-500 text-right">less than 2 min</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}