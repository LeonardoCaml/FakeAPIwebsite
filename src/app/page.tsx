import Link from "next/link";
import {
  Github,
  BookOpen,
  Zap,
  Shield,
  Globe,
  ChevronRight,
} from "lucide-react";

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
          <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 transform rotate-2">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <code className="text-sm sm:text-base font-mono leading-relaxed">
              <p className="text-pink-400">const</p>
              <p className="text-white">
                {" "}
                response = <span className="text-pink-400">await</span> fetch(
              </p>
              <p className="text-yellow-200"> 'https://fake-social-media-api.onrender.com'</p>
              <p className="text-white">);</p>
              <p className="text-blue-400 mt-2">// Retorno imediato</p>
              <p className="text-white">{'{ "status": "success" }'}</p>
            </code>
          </div>
        </div>
      </main>

      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Por que escolher nossa API?
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="text-blue-600" />}
            title="Alta Performance"
            desc="Latência mínima com infraestrutura distribuída globalmente."
          />
          <FeatureCard
            icon={<Shield className="text-blue-600" />}
            title="Segurança Máxima"
            desc="Autenticação robusta e proteção contra ataques DDoS nativa."
          />
          <FeatureCard
            icon={<Globe className="text-blue-600" />}
            title="Sempre Online"
            desc="SLA de 99.9% garantido para que você nunca perca uma requisição."
          />
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16 text-slate-900">
          Integração Relâmpago
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
          <Step
            number="1"
            title="Crie sua conta"
            desc="Acesse o portal e gere suas credenciais em segundos."
          />
          <Step
            number="2"
            title="Configure a Key"
            desc="Adicione sua API Key no seu ambiente de desenvolvimento."
          />
          <Step
            number="3"
            title="Lance em Prod"
            desc="Tudo pronto! Sua aplicação agora tem superpoderes."
          />
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
