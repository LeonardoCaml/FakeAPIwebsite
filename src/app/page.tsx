import Link from "next/link";
import { Github, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import builder from "@/app/assets/Site Builder 2.svg";
import conversation from "@/app/assets/Testimonial 1.svg";

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-center text-xl font-bold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-center text-lg text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex-1 flex flex-col items-center group">
      <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-slate-50 group-hover:bg-blue-600 transition-colors">
        {number}
      </div>
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-12">
        {/* Lado Esquerdo: Texto e Botões */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Sua API, mais <span className="text-blue-600">simples</span> do que
            nunca.
          </h1>
          <p className="text-lg text-slate-600 max-w-lg">
            Documentação completa para integrar nossa solução em minutos.
            Endpoints otimizados, seguros e prontos para produção.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/docs"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              <BookOpen size={20} />
              Começar Agora
            </Link>

            <a
              href="https://github.com/LeonardoCaml"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        {/* Lado Direito: Preview de Código */}
        <div className="flex-1 w-full max-w-md">
          <div>
            <Image src={builder} alt="Art" />
          </div>
        </div>
      </main>

      <section className="py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        <div>
          <Image src={conversation} alt="conversation" className="w-lg" />
        </div>
        <div className="text-center md:text-end space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Começe a criar <span className="text-blue-600">agora mesmo!</span>
          </h1>
          <p className="text-lg text-slate-600">
            Está procurando dados simples para poder colocar na sua aplicação e
            simular uma rede social robusta? Pois agora você encontrou! A{" "}
            <strong>Fake Social Media API</strong> é 100% gratuita e fácil de
            usar, não é necessário fazer nenhuma autenticação. Não perca tempo,
            comece a integrar nossa API hoje mesmo e veja os resultados
            imediatamente.
          </p>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-blue-600 rounded-[2.5rem] py-16 px-8 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Explore nossa documentação detalhada e comece a construir o futuro
              hoje mesmo.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all scale-100 hover:scale-105"
            >
              Ir para Documentação <ChevronRight size={18} />
            </Link>
          </div>
          {/* Círculos decorativos de fundo */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-700 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="border-t border-slate-100 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Leonardo Camelo - Criado com Next.js
        </div>
      </footer>
    </div>
  );
}
