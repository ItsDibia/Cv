"use client";

import Contacto from "@/components/Contacto";
import AboutMe from "@/components/About";
import { useState } from "react";
import Educacion from "@/components/Educacion";
import Cursos from "@/components/Cursos";
import Experiencia from "@/components/Experiencia";
import HabilidadesCarousel from "@/components/Habilidades";
import Foto from "@/components/Foto";
import Proyectos from "@/components/Proyectos";

export default function HomePage() {
  const secciones = [
    { name: "Sobre mí", component: <AboutMe /> },
    { name: "Experiencia", component: <Experiencia /> },
    { name: "Educación", component: <Educacion /> },
    { name: "Habilidades", component: <HabilidadesCarousel /> },
    { name: "Cursos", component: <Cursos /> },
    { name: "Proyectos", component: <Proyectos /> }
  ];

  const [activeSection, setActiveSection] = useState(secciones[0]);

  return (
    <div>
      <nav className="bg-gray-900 text-white shadow-sm">
        <ul className="flex justify-center flex-wrap gap-4 px-2 py-2">
          {secciones.map((seccion, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveSection(seccion)}
                aria-current={
                  activeSection.name === seccion.name ? "page" : undefined
                }
                className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70
            ${
              activeSection.name === seccion.name
                ? "bg-white text-gray-900"
                : "hover:bg-white/10 hover:text-gray-300"
            }`}
              >
                {seccion.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container mx-auto max-w-7xl bg-slate-50 mt-6 rounded border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
          {/* Sidebar */}
          <aside className="flex flex-col gap-4 col-span-1 bg-sky-900 pb-4">
            <Foto />
            <Contacto />
          </aside>

          {/* Contenido principal */}
          <main className="md:col-span-2">{activeSection.component}</main>
        </div>
      </div>
    </div>
  );
}
