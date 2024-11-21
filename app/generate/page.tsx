"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PresentationGenerator } from "@/components/presentation-generator";
import { SlideGenerator } from "@/components/slide-generator";

export default function GeneratePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="content-source" className="space-y-8">
        <TabsList className="bg-white/5">
          <TabsTrigger value="content-source">Content Source</TabsTrigger>
          <TabsTrigger value="slide-types">Slide Types</TabsTrigger>
        </TabsList>

        <TabsContent value="content-source" className="space-y-8">
          <PresentationGenerator
            type="text"
            title="Text to Presentation"
            description="Have an outline of presentation prepared? Just paste the text and your presentation is ready in seconds."
            placeholder="Paste your presentation content here..."
            isTextArea
          />

          <PresentationGenerator
            type="topic"
            title="Topic to Presentation"
            description="Have a topic in mind? Just enter the topic and number of slides you want."
            placeholder="Enter your presentation topic..."
          />

          <PresentationGenerator
            type="youtube"
            title="YouTube to PPT"
            description="Have a YouTube video? Convert it into a ready-to-use PPT."
            placeholder="Paste YouTube video URL..."
          />

          <PresentationGenerator
            type="url"
            title="URL to PPT"
            description="Have a URL? Watch your AI-powered presentation come to life."
            placeholder="Paste webpage URL..."
          />

          <PresentationGenerator
            type="pdf"
            title="PDF to PPT"
            description="Turn your PDF into a professional PowerPoint with AI."
            isFileUpload
            acceptedFiles=".pdf"
          />

          <PresentationGenerator
            type="docx"
            title="DOCX to PPT"
            description="Transform your Word document into a stunning presentation."
            isFileUpload
            acceptedFiles=".docx,.doc"
          />

          <PresentationGenerator
            type="image"
            title="Image to PPT"
            description="Transform your images into a complete, polished PPT."
            isFileUpload
            acceptedFiles="image/*"
          />
        </TabsContent>

        <TabsContent value="slide-types" className="space-y-8">
          <SlideGenerator
            type="pros-cons"
            title="Pros/Cons Slide"
            description="Create balanced comparison slides instantly."
          />

          <SlideGenerator
            type="bullet-points"
            title="Bullet Point + Image"
            description="Generate visual slides with key points."
          />

          <SlideGenerator
            type="lists"
            title="Lists Slide"
            description="Create organized, clear list presentations."
          />

          <SlideGenerator
            type="metrics"
            title="Metrics Slide"
            description="Showcase data and KPIs effectively."
          />

          <SlideGenerator
            type="three-column"
            title="Three Column Slide"
            description="Create balanced three-column layouts."
          />

          <SlideGenerator
            type="timeline"
            title="Timeline Slide"
            description="Visualize processes and histories."
          />

          <SlideGenerator
            type="swot"
            title="SWOT Analysis"
            description="Create comprehensive SWOT analysis slides."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}