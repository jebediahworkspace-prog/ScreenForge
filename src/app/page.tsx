import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Sparkles, Smartphone, Code2, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Sparkles className="w-5 h-5 text-violet-400" />
            ScreenForge
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button className="bg-violet-600 hover:bg-violet-500 text-white">
                Start for free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <Badge className="mb-6 bg-violet-500/10 text-violet-300 border-violet-500/20">
          AI-powered UI generation
        </Badge>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
          Turn any app idea into
          <br />
          <span className="text-violet-400">beautiful screens</span> in seconds
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Describe your app. ScreenForge generates polished, production-ready
          mobile screens with live previews and clean Tailwind code you can copy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white px-8">
              Generate your first screens
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <Smartphone className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live phone previews</h3>
            <p className="text-zinc-400">
              See your screens rendered instantly inside a realistic phone frame.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <Code2 className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Copy-ready code</h3>
            <p className="text-zinc-400">
              Every screen comes with clean Tailwind + React code you can paste into your project.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <Zap className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Iterate in seconds</h3>
            <p className="text-zinc-400">
              Don&apos;t like a screen? Regenerate it with one click while keeping the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to design faster?</h2>
        <p className="text-zinc-400 mb-8">No design skills required. Just describe what you want.</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white px-8">
            Start generating free
            <ArrowRight className
@'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Sparkles, Smartphone, Code2, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Sparkles className="w-5 h-5 text-violet-400" />
            ScreenForge
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button className="bg-violet-600 hover:bg-violet-500 text-white">
                Start for free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <Badge className="mb-6 bg-violet-500/10 text-violet-300 border-violet-500/20">
          AI-powered UI generation
        </Badge>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
          Turn any app idea into
          <br />
          <span className="text-violet-400">beautiful screens</span> in seconds
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Describe your app. ScreenForge generates polished, production-ready
          mobile screens with live previews and clean Tailwind code you can copy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white px-8">
              Generate your first screens
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <Smartphone className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live phone previews</h3>
            <p className="text-zinc-400">
              See your screens rendered instantly inside a realistic phone frame.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <Code2 className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Copy-ready code</h3>
            <p className="text-zinc-400">
              Every screen comes with clean Tailwind + React code you can paste into your project.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <Zap className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Iterate in seconds</h3>
            <p className="text-zinc-400">
              Don&apos;t like a screen? Regenerate it with one click while keeping the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to design faster?</h2>
        <p className="text-zinc-400 mb-8">No design skills required. Just describe what you want.</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white px-8">
            Start generating free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 ScreenForge. Built for indie makers.
      </footer>
    </div>
  );
}
