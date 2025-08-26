export default function Proyectos() {
  const Proyectos = {
    "Excel Analizer - Analiza tu excel automáticamente": [
      "https://excel-analyzer-xi.vercel.app/",
      "/Proyectos/ExcelAnalizer.png"
    ],
    "Guía de exportación": [
      "https://comercio-internacional-react-3wgp.vercel.app/",
      "/Proyectos/GuiaExportacion.png"
    ],
    "Crime & Safety": [
      "https://crime-and-safety.vercel.app/",
      "/Proyectos/CrimeAndSafety.png"
    ],
    "Python - Analisis - lk": [
      "https://www.linkedin.com/posts/diego-perez-61179129a_leveraging-python-and-power-bi-for-data-analysis-activity-7274338046223781889-d_PI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhf1y0BevQ44bYI3AsgNFNLuz0EhXvOCLM",
      "/Proyectos/PythonAnalisislk.png"
    ],
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 mt-8 rounded-xl border border-slate-200 p-8 shadow-sm">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Proyectos</h1>
        <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {Object.entries(Proyectos).map(([title, [link, imgSrc]]) => (
          <div 
            key={title} 
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200"
          >
            <div className="relative overflow-hidden">
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3 line-clamp-2">
                {title}
              </h3>
              
              <a
                href={link}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 group/btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
                <svg 
                  className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}