const CodeBlock = ({ code }: { code: string }) => {
  return (
    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto border border-gray-700">
      <code>{code}</code>
    </pre>
  );
};

// Exemplo de uso:
// <CodeBlock code={`GET /api/v1/users\nContent-Type: application/json`} />