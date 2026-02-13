import { Github } from 'lucide-react';

export function GithubLink() {
  return (
    <a 
      href="https://github.com/seu-usuario/sua-api" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-medium"
    >
      <Github size={20} />
      Ver no GitHub
    </a>
  );
}