"use client";

import { PhoneFrame } from "./phone-frame";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

interface ScreenPreviewProps {
  name: string;
  html: string;
}

export function ScreenPreview({ name, html }: ScreenPreviewProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center justify-between w-full max-w-[280px]">
        <h3 className="font-medium text-sm text-zinc-300 truncate">{name}</h3>
        <Button
          size="sm"
          variant="ghost"
          className="h-8 text-zinc-400 hover:text-white"
          onClick={copyCode}
        >
          <Copy className="w-3.5 h-3.5 mr-1" />
          {copied ? "Copied" : "Code"}
        </Button>
      </div>

      <PhoneFrame>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PhoneFrame>
    </div>
  );
}
