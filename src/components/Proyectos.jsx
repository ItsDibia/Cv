export default function Proyectos() {
  const Proyectos = {
    "Guía de exportación": [
      "https://comercio-internacional-react-3wgp.vercel.app/",
      "/Proyectos/GuiaExportacion.png"
    ],
    "Crime_and_safety": [
      "https://crime-and-safety.vercel.app/",
      "/Proyectos/CrimeAndSafety.png"
    ]
  };

  return (
    <div className="w-full bg-slate-50 mt-6 rounded border p-6">
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
      <ul className="flex flex-col gap-6">
        {Object.entries(Proyectos).map(([title, [link, imgSrc]]) => (
          <li key={title} className="bg-white rounded-lg shadow p-4 w-full">
            <a
              href={link}
              className="text-blue-600 hover:underline text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
            <img
              src={imgSrc}
              alt={title}
              className="mt-2 rounded w-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
