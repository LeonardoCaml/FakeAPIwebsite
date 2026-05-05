import { notFound } from "next/navigation";
import { ENDPOINTS_DATA } from "@/constants/endpoints";
import { Terminal, Copy, AlertCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = ENDPOINTS_DATA[slug];

  return {
    title: data ? data.title : "Endpoint não encontrado",
    description: data ? data.description : "Detalhes do endpoint da MinhaAPI",
  };
}

export default async function EndpointPage({ params }: PageProps) {
  const { slug } = await params;

  const data = ENDPOINTS_DATA[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={cn(
              "px-3 py-1 rounded-md text-xs font-bold text-white",
              data.method === "GET" ? "bg-emerald-500" : "bg-blue-500",
            )}
          >
            {data.method}
          </span>
          <code className="text-slate-500 font-mono">{data.path}</code>
        </div>
        <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
        <p className="text-lg text-slate-600 mt-2">{data.description}</p>
        {data.alert ? (
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 text-amber-800">
            <AlertCircle className="shrink-0" size={20} />
            <p className="text-sm">
              <strong>Atenção:</strong> {data.alert}
            </p>
          </div>
        ) : (
          ""
        )}
      </header>

      <hr className="border-slate-100" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Terminal size={20} className="text-slate-400" />
          Corpo (JSON)
        </h2>

        <div className="relative group">
          <pre className="bg-slate-900 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed border border-slate-800 shadow-xl">
            <code className="text-blue-300">{data.exampleResponse}</code>
          </pre>

          <button className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white border border-slate-700">
            <Copy size={16} />
          </button>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="text-xl font-semibold text-slate-900">Parâmetros</h2>
        {data.params && data.params.length > 0 ? (
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase text-[10px] tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">Nome</th>
                  <th className="px-6 py-4">Tipo</th>
                  <th className="px-6 py-4">Obrigatório</th>
                  <th className="px-6 py-4">Descrição</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.params.map((p: { name: string; type: string; required: boolean; desc: string }) => (
                  <tr key={p.name}>
                    <td className="px-6 py-4 font-mono text-blue-600">{p.name}</td>
                    <td className="px-6 py-4 text-slate-400 italic">{p.type}</td>
                    <td className="px-6 py-4 text-slate-500">{p.required ? "Sim" : "Não"}</td>
                    <td className="px-6 py-4 text-slate-600 text-xs">{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-slate-400 text-sm italic">Nenhum parâmetro adicional.</p>
        )}
      </section>
    </div>
  );
}

function cn(...inputs: any) {
  return inputs.filter(Boolean).join(" ");
}
