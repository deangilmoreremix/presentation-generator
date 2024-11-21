"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";
import { cn } from "@/lib/utils";
import { generatePresentation, getTaskStatus, themes, type Theme } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

interface GeneratorProps {
  type: 'text' | 'topic' | 'youtube' | 'url' | 'pitch' | 'pdf' | 'docx' | 'image';
  title: string;
  description: string;
  placeholder: string;
  isTextArea?: boolean;
  isFileUpload?: boolean;
  acceptedFiles?: string;
}

export function PresentationGenerator({ 
  type, 
  title, 
  description, 
  placeholder,
  isTextArea,
  isFileUpload,
  acceptedFiles
}: GeneratorProps) {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<Theme>("default");
  const [progress, setProgress] = useState(0);
  const [taskId, setTaskId] = useState<string | null>(null);
  const { toast } = useToast();

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
        setTaskId(null);
      } else if (status.task_status === 'FAILURE') {
        throw new Error('Task failed');
      } else if (['PENDING', 'RECEIVED', 'STARTED'].includes(status.task_status)) {
        setTimeout(() => pollTaskStatus(taskId), 2000);
      }
    } catch (error) {
      setIsLoading(false);
      setTaskId(null);
      toast({
        title: "Error",
        description: "Failed to generate presentation. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);

    try {
      if (isFileUpload && file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('theme', theme);
        // Handle file upload case
      } else {
        const taskId = await generatePresentation({
          plain_text: input,
          theme,
          length: 5,
        });
        setTaskId(taskId);
        pollTaskStatus(taskId);
      }
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
    <Card className="p-6 bg-white/5 border-white/10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>

        {isFileUpload ? (
          <FileUpload
            acceptedFiles={acceptedFiles}
            onFileSelect={setFile}
            maxSize={20}
          />
        ) : isTextArea ? (
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          />
        ) : (
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          />
        )}

        <Select value={theme} onValueChange={(value) => setTheme(value as Theme)}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            {themes.map((theme) => (
              <SelectItem key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {isLoading && taskId && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-400 text-center">{progress}% complete</p>
          </div>
        )}

        <Button 
          type="submit"
          className={cn(
            "w-full bg-gradient-to-r from-purple-600 to-blue-600",
            "hover:from-purple-700 hover:to-blue-700",
            "text-white font-medium"
          )}
          disabled={isLoading || (isFileUpload && !file) || (!isFileUpload && !input)}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              Generate Presentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}