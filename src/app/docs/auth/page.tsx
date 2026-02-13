import { Lock, ShieldCheck, AlertCircle } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header className="space-y-4">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
          <Lock size={24} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Autenticação
        </h1>
        <p className="text-lg text-slate-600">
          Todas as requisições à nossa API devem ser autenticadas usando uma
          chave de API (API Key).
        </p>
      </header>

      {/* Alerta de Segurança */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 text-amber-800">
        <AlertCircle className="shrink-0" size={20} />
        <p className="text-sm">
          <strong>Atenção:</strong> Nunca compartilhe sua chave de API em
          repositórios públicos ou no front-end da sua aplicação.
        </p>
      </div>

      {/* Passo a passo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Como usar sua chave
        </h2>
        <p className="text-slate-600">
          Nós utilizamos o método de <strong>Bearer Token</strong>. Você deve
          incluir sua chave no Header de cada requisição HTTP:
        </p>

        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto border border-slate-800 shadow-lg">
          <code className="text-sm font-mono block space-y-2">
            <p className="text-slate-500">// Exemplo usando fetch</p>
            <p className="text-white text-sm lg:text-base">
              const URL ={" "}
              <span className="text-blue-400">
                "https://fake-social-media-api.onrender.com/users"
              </span>
            </p>
            <div className="bg-slate-900 rounded-lg mx-auto my-8">
              <p>const res = await fetch(URL, {"{"}</p>
              <pre className="text-sm font-mono leading-relaxed">
                <code className="text-blue-400"></code>
                <code className="block ml-4">
                  <span className="text-pink-400">method</span>:{" "}
                  <span className="text-emerald-400">"GET"</span>,
                </code>
                <code className="block ml-4">
                  <span className="text-pink-400">headers</span>:{" { "}
                  <span className="text-blue-400"></span>
                </code>
                <code className="block ml-8">
                  <span className="text-pink-400">Authorization</span>:
                  <span className="text-emerald-400"> "Bearer token",</span>
                  <br />
                  <span>{" }, "}</span>
                  <br />
                </code>
                <span>{"});"}</span>
                <code className="block ml-4 text-blue-400"></code>
                <code className="text-blue-400"></code>
                <br />
                <span className="text-slate-500">
                  //resto do código aqui...
                </span>
              </pre>
            </div>
          </code>
        </div>
      </section>

      {/* Tabela de Erros de Auth */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <ShieldCheck size={24} className="text-emerald-500" />
          Códigos de Resposta
        </h2>
        <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold">
              <tr>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Significado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-emerald-600">
                  200 OK
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Autenticação bem-sucedida.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-red-600">
                  401 Unauthorized
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Chave de API inválida ou ausente.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-orange-600">
                  403 Forbidden
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Chave válida, mas sem permissão para este recurso.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
