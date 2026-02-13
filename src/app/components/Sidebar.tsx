"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAVIGATION } from "@/constants/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Função auxiliar para combinar classes Tailwind de forma limpa
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="p-6 h-full overflow-y-auto bg-slate-50/50">
      <div className="mb-10">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Minha<span className="text-blue-600">API</span>
        </Link>
      </div>

      <div className="space-y-8">
        {DOCS_NAVIGATION.map((section) => (
          <div key={section.title}>
            <h5 className="mb-3 text-xs font-semibold text-slate-400 uppercase tracking-widest px-2">
              {section.title}
            </h5>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-lg transition-all duration-200",
                        isActive
                          ? "bg-blue-50 text-blue-700 font-semibold border-r-2 border-blue-600"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
