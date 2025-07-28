"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  BarChart,
  Braces,
  Brain,
  LineChart,
  Laptop2,
} from "lucide-react";

const habilidades = [
  {
    titulo: "Análisis de Datos",
    icono: <LineChart className="w-7 h-7 text-blue-600" />,
    descripcion: [
      "Procesamiento de datos con Python.",
      "ETL, EDA y análisis con Pandas y NumPy.",
      "Visualizaciones con Seaborn y Matplotlib.",
    ],
  },
  {
    titulo: "Business Intelligence",
    icono: <BarChart className="w-7 h-7 text-purple-600" />,
    descripcion: [
      "Dashboards con Power BI.",
      "KPIs y medidas con DAX.",
      "Integración de datos desde Python.",
    ],
  },
  {
    titulo: "Desarrollo Web",
    icono: <Braces className="w-7 h-7 text-green-600" />,
    descripcion: [
      "HTML, CSS y Tailwind CSS.",
      "React.js y aprendizaje activo en Next.js.",
      "Construcción de APIs REST con FastAPI.",
    ],
  },
  {
    titulo: "Competencias Profesionales",
    icono: <Brain className="w-7 h-7 text-orange-600" />,
    descripcion: [
      "Autodidacta y con mentalidad de mejora continua.",
      "Capacidad de investigar y aplicar soluciones.",
      "Proactividad y resolución de problemas técnicos.",
    ],
  },
];

export default function HabilidadesCarousel() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Habilidades
      </h2>

      <Carousel className="relative">
        <CarouselContent>
          {habilidades.map((item, index) => (
            <CarouselItem key={index} className="px-4">
              <article
                className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 sm:p-8 flex flex-col items-center text-center transition duration-300 hover:shadow-md"
                role="group"
                aria-roledescription="slide"
              >
                <div className="mb-4">{item.icono ?? <Laptop2 className="w-7 h-7 text-gray-500" />}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.titulo}
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 text-left">
                  {item.descripcion.map((punto, i) => (
                    <li key={i}>{punto}</li>
                  ))}
                </ul>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
