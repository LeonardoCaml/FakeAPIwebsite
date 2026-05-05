import Link from "next/link";
import { Github, BookOpen } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">F</span>
          </div>
          <span className="font-bold text-slate-900 text-sm">
            Fake<span className="text-blue-600">Api</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
          <Link href="/docs" className="hover:text-slate-900 transition-colors">
            Documentação
          </Link>
          <Link href="/docs/users" className="hover:text-slate-900 transition-colors">
            Usuários
          </Link>
          <Link href="/docs/feed" className="hover:text-slate-900 transition-colors">
            Posts
          </Link>
          <Link href="/docs/follow" className="hover:text-slate-900 transition-colors">
            Social
          </Link>
          <Link href="/docs/support" className="hover:text-slate-900 transition-colors">
            Suporte
          </Link>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <Link
            href="/docs"
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
          >
            <BookOpen size={14} />
            Docs
          </Link>
        </div>
      </div>
    </header>
  );
}
