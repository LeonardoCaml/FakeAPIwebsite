import { AlertTriangle, Bug, LifeBuoy } from "lucide-react";

export default function ErrorsPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight text-center lg:text-left">Erros e Respostas</h1>
        <p className="text-lg text-slate-600 leading-relaxed text-center lg:text-left">
          Nossa API utiliza códigos de resposta HTTP padrão para indicar o sucesso ou falha de uma requisição.
        </p>
      </header>

      {/* Formato de Erro Standard */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <Bug size={24} className="text-red-500" />
          Corpo do Erro
        </h2>
        <p className="text-slate-600">
          Sempre que um erro ocorre, retornamos um objeto JSON com o seguinte formato:
        </p>
        <div className="bg-[#0f172a] rounded-xl p-6 border border-slate-800 shadow-xl">
          <code className="text-sm font-mono block">
            <p className="text-white">{"{"}</p>
            <p className="pl-4 text-pink-400">"error": <span className="text-emerald-400">"Falha na validação dos dados"</span>,</p>
            <p className="pl-4 text-pink-400">"details": <span className="text-white">[</span></p>
            <p className="pl-8 text-white">{"{"}</p>
            <p className="pl-12 text-pink-400">"field": <span className="text-yellow-400">"username"</span>,</p>
            <p className="pl-12 text-pink-400">"message": <span className="text-slate-300">"Mínimo 3 caracteres"</span></p>
            <p className="pl-8 text-white">{"}"}</p>
            <p className="pl-4 text-white">{"]"}</p>
            <p className="text-white">{"}"}</p>
          </code>
        </div>
      </section>

      {/* Grid de Códigos Comuns */}
      <div className="grid sm:grid-cols-2 gap-4">
        <ErrorCard code="400" title="Bad Request" desc="Dados inválidos — campo obrigatório ausente ou fora dos limites de validação (Zod)." />
        <ErrorCard code="404" title="Not Found" desc="Recurso não encontrado. Ex.: username ou ID inexistente." />
        <ErrorCard code="500" title="Server Error" desc="Algo deu errado no servidor. Tente novamente mais tarde." />
        <ErrorCard code="204" title="No Content" desc="Operação concluída com sucesso, sem corpo de resposta (DELETE)." />
      </div>
    </div>
  );
}

function ErrorCard({ code, title, desc }: { code: string, title: string, desc: string }) {
  return (
    <div className="p-5 border border-slate-100 rounded-xl bg-white shadow-sm">
      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded mb-2 inline-block font-mono">{code}</span>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}