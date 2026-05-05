import { Globe, CheckCircle, Terminal } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header className="space-y-4">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
          <Globe size={24} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Acesso à API
        </h1>
        <p className="text-lg text-slate-600">
          A Fake Social Network API é completamente aberta. Nenhuma chave de
          API, token ou cadastro é necessário para fazer requisições.
        </p>
      </header>

      {/* Badge de API Aberta */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex gap-3 text-emerald-800">
        <CheckCircle className="shrink-0" size={20} />
        <p className="text-sm">
          <strong>API Aberta:</strong> Todas as rotas podem ser acessadas
          diretamente, sem autenticação. Ideal para testes e prototipagem.
        </p>
      </div>

      {/* Exemplo de uso */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Fazendo sua primeira requisição
        </h2>
        <p className="text-slate-600">
          Basta apontar para a URL base e chamar qualquer endpoint. Veja um
          exemplo usando <code className="text-blue-600 font-mono text-sm">fetch</code>:
        </p>

        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto border border-slate-800 shadow-lg">
          <code className="text-sm font-mono block space-y-2">
            <p className="text-slate-500">// Listar usuários — sem headers de autenticação</p>
            <p className="text-white">
              const URL ={" "}
              <span className="text-blue-400">
                "https://fake-social-media-api.onrender.com/users"
              </span>
            </p>
            <div className="bg-slate-900 rounded-lg mx-auto my-8">
              <p>const res = await fetch(URL, {"{"}</p>
              <pre className="text-sm font-mono leading-relaxed">
                <code className="block ml-4">
                  <span className="text-pink-400">method</span>:{" "}
                  <span className="text-emerald-400">"GET"</span>,
                </code>
              </pre>
              <span>{"});"}</span>
              <br />
              <p className="mt-2">
                const data = await res.{" "}
                <span className="text-yellow-400">json</span>();
              </p>
              <br />
              <span className="text-slate-500">
                // data → array de usuários paginados
              </span>
            </div>
          </code>
        </div>
      </section>

      {/* Tabela de Respostas */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <Terminal size={24} className="text-slate-400" />
          Códigos de Resposta Comuns
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
                  Requisição bem-sucedida.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-emerald-600">
                  201 Created
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Recurso criado com sucesso (POST).
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-emerald-600">
                  204 No Content
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Operação concluída sem corpo de resposta (DELETE).
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-red-600">
                  400 Bad Request
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Dados inválidos — confira os campos obrigatórios e suas
                  restrições.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-red-600">
                  404 Not Found
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Recurso não encontrado (ex.: username inexistente).
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-bold text-red-600">
                  500 Internal Server Error
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Erro inesperado no servidor.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
