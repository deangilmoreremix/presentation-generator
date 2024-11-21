"use client";

import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  acceptedFiles?: string;
  onFileSelect: (file: File | null) => void;
  maxSize?: number; // in MB
}

export function FileUpload({ acceptedFiles, onFileSelect, maxSize = 20 }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const maxSizeBytes = maxSize * 1024 * 1024;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedFiles ? { [acceptedFiles]: [] } : undefined,
    maxSize: maxSizeBytes,
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles?.[0]) {
        setFile(acceptedFiles[0]);
        onFileSelect(acceptedFiles[0]);
      }
    },
  });

  const removeFile = () => {
    setFile(null);
    onFileSelect(null);
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors",
          "hover:border-purple-500/50 hover:bg-purple-500/5",
          isDragActive ? "border-purple-500 bg-purple-500/5" : "border-white/20 bg-white/5",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="w-8 h-8 mb-4 text-gray-400" />
          <p className="text-sm text-gray-400">
            {isDragActive ? (
              "Drop the file here"
            ) : (
              <>
                Drag & drop your file here, or <span className="text-purple-400">browse</span>
                <br />
                <span className="text-xs">
                  {acceptedFiles ? `Supported formats: ${acceptedFiles}` : "All files supported"}
                </span>
                <br />
                <span className="text-xs">Max size: {maxSize}MB</span>
              </>
            )}
          </p>
        </div>
      </div>

      {file && (
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Upload className="w-4 h-4 text-purple-400" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {file.name}
              </p>
              <p className="text-xs text-gray-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            onClick={removeFile}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
}