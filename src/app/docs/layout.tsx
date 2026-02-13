import { Sidebar } from "@/components/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Fixa */}
      <aside className="w-64 border-r bg-gray-50 hidden md:block">
        <Sidebar />
      </aside>

      {/* Conteúdo da Doc */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
