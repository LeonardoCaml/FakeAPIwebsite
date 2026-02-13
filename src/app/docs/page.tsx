import { ArrowRight, Terminal, Globe, Code } from "lucide-react";
import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Header da Página */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Introdução
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Bem-vindo à documentação oficial da{" "}
          <strong>Fake Social Network API</strong>. Aprenda como integrar nossa
          poderosa infraestrutura em sua aplicação com facilidade e segurança.
        </p>
      </header>

      <hr className="border-slate-100" />

      {/* Seção: O que é a API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          O que é a nossa API?
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Nossa API foi desenhada para desenvolvedores iniciantes que precisam
          de alta escalabilidade, ou na prática, uma base de dados consolidada
          para interagir com sua aplicação. Voltada pra interfaces de rede
          social, utilizamos o padrão REST com respostas em formato JSON,
          garantindo compatibilidade com praticamente qualquer linguagem de
          programação moderna.
        </p>
      </section>

      {/* Cards de Navegação Rápida */}
      <div className="grid md:grid-cols-2 gap-6">
        <QuickLink
          title="Autenticação"
          description="Saiba como gerar e usar suas chaves de API com segurança."
          href="/docs/auth"
          icon={<Terminal size={20} />}
        />
        <QuickLink
          title="Endpoints"
          description="Explore todos os recursos e dados disponíveis para consumo."
          href="/docs/users"
          icon={<Code size={20} />}
        />
      </div>

      {/* Exemplo de URL Base */}
      <section className="bg-slate-900 rounded-xl p-6 text-slate-300 font-mono text-sm relative overflow-hidden shadow-inner">
        <div className="flex items-center gap-2 text-slate-500 mb-4 border-b border-slate-800 pb-2">
          <Globe size={14} />
          <span>URL Base de Produção</span>
        </div>
        <p className="text-emerald-400">https://fake-social-media-api.onrender.com</p>
      </section>

      {/* Próximos Passos */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          Próximos passos
        </h2>
        <p className="text-slate-600 text-lg">
          Para começar a fazer requisições, você precisará de uma chave de API
          válida. Siga para a seção de autenticação para entender o processo.
        </p>
        <Link href="/docs/auth">
          <button className="flex items-center gap-2 text-blue-600 text-lg font-medium hover:underline group">
            Configurar Autenticação{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </Link>
      </section>
    </div>
  );
}

// Componente simples para os links rápidos
function QuickLink({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="p-6 border border-slate-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all group bg-white"
    >
      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500">{description}</p>
    </Link>
  );
}
