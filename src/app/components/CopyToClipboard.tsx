"use client";

export function CopyButton({ text }: { text: string }) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    alert("Copiado para a área de transferência!");
  };

  return (
    <button 
      onClick={copyToClipboard}
      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Copiar
    </button>
  );
}