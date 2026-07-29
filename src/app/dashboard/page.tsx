"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScreenPreview } from "@/components/screen-preview";
import { Loader2, Sparkles, Crown } from "lucide-react";

interface Screen {
  name: string;
  description: string;
  html: string;
}

interface GenerationResult {
  appName: string;
  screens: Screen[];
}

const FREE_LIMIT = 3;

export default function DashboardPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [error, setError] = useState("");
  const [generationsLeft, setGenerationsLeft] = useState(FREE_LIMIT);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const used = Number(localStorage.getItem("sf_generations") || "0");
    setGenerationsLeft(Math.max(0, FREE_LIMIT - used));

    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      localStorage.setItem("sf_pro", "true");
      setIsPro(true);
      setGenerationsLeft(999);
    }
    if (localStorage.getItem("sf_pro") === "true") {
      setIsPro(true);
      setGenerationsLeft(999);
    }
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    if (!isPro && generationsLeft <= 0) {
      setError("Free limit reached. Upgrade to Pro for unlimited generations.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setResult(data);

      if (!isPro) {
        const used = Number(localStorage.getItem("sf_generations") || "0") + 1;
        localStorage.setItem("sf_generations", String(used));
        setGenerationsLeft(Math.max(0, FREE_LIMIT - used));
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setError(data.error || "Could not start checkout");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Sparkles className="w-5 h-5 text-violet-400" />
            ScreenForge
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-zinc-400">
              {isPro ? (
                <span className="text-violet-400 font-medium">Pro plan</span>
              ) : (
                generationsLeft + " free generations left"
              )}
            </div>
            {!isPro && (
              <Button
                onClick={handleUpgrade}
                size="sm"
                className="bg-amber-500 hover:bg-amber-400 text-black"
              >
                <Crown className="w-4 h-4 mr-1" />
                Upgrade - $19/mo
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold mb-2">Describe your app</h1>
          <p className="text-zinc-400 mb-6">
            Example: A habit tracker for remote workers with streaks and a calm minimalist design
          </p>

          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the app you want to design..."
            className="min-h-[140px] bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 mb-4"
          />

          <Button
            onClick={handleGenerate}
            disabled={loading || prompt.trim().length < 10 || (!isPro && generationsLeft <= 0)}
            className="w-full bg-violet-600 hover:bg-violet-500 h-12 text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating screens...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Screens
              </>
            )}
          </Button>

          {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
        </div>

        {result && (
          <div>
            <h2 className="text-2xl font-bold mb-10 text-center">
              {result.appName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
              {result.screens.map((screen, index) => (
                <ScreenPreview
                  key={index}
                  name={screen.name}
                  html={screen.html}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
