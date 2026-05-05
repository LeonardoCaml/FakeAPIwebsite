import { Github, MessageSquare, Mail, ExternalLink } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-3xl">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Suporte e Comunidade
        </h1>
        <p className="text-lg text-slate-600">
          Precisa de ajuda com a integração ou encontrou um bug? Estamos aqui
          para ajudar.
        </p>
      </header>

      <div className="grid gap-4">
        {/* GitHub Card */}
        <a
          href="https://github.com/LeonardoCaml/Fake-Social-Media-API"
          target="_blank"
          className="flex items-center justify-between p-6 border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center">
              <Github size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                Repositório no GitHub
              </h3>
              <p className="text-sm text-slate-500">
                Abra issues, envie PRs ou veja o código fonte.
              </p>
            </div>
          </div>
          <ExternalLink
            size={20}
            className="text-slate-300 group-hover:text-blue-500"
          />
        </a>

        {/* Email Card */}
        <div className="flex items-center gap-4 p-6 border border-slate-100 rounded-2xl bg-slate-50/50">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">E-mail de Suporte</h3>
            <p className="text-sm text-slate-500 font-mono">
              leonardocamelo20@gmail.com
            </p>
          </div>
        </div>
      </div>

      <section className="pt-6 border-t border-slate-100">
        <h2 className="text-xl font-semibold mb-4 text-slate-900">
          FAQs Rápidas
        </h2>
        <div className="space-y-4 text-sm text-slate-600">
          <details className="p-4 bg-white border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50">
            <summary className="font-medium text-slate-900">
              A API é gratuita?
            </summary>
            <p className="mt-2 pl-4 border-l-2 border-blue-500">
              Sim, nossa API é 100% gratuita.
            </p>
          </details>
          <details className="p-4 bg-white border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50">
            <summary className="font-medium text-slate-900">
              Como reportar um bug?
            </summary>
            <p className="mt-2 pl-4 border-l-2 border-blue-500">
              A melhor forma é abrir uma Issue no nosso GitHub detalhando o
              problema e como reproduzi-lo.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
