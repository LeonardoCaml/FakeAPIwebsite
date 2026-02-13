import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 text-slate-400 mb-4">
          <Search size={40} />
        </div>

        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Página não encontrada
        </h1>

        <p className="text-slate-600 leading-relaxed">
          Ops! Parece que o endpoint ou a página que você está procurando não
          existe ou foi movida.
        </p>

        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/docs"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            <Home size={18} />
            Voltar para a Doc
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Ir para a Home principal
          </Link>
        </div>
      </div>
    </div>
  );
}
