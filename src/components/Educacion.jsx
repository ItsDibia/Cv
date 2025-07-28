const Educacion = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-4 bg-slate-100 border rounded text-sm leading-relaxed text-justify text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-center">Educación</h2>

      {/* Formación académica */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Formación Académica</h3>

        <div className="mb-4">
          <p><strong>Administración de Negocios Internacionales</strong></p>
          <p>Fundación Universitaria Antonio de Arévalo - Unitecnar, Cartagena</p>
          <p className="text-gray-600">Julio 2023 – En proceso de grado</p>
        </div>

        <div className="mb-4">
          <p><strong>Tecnología en Gestión Gastronómica</strong></p>
          <p>Fundación Universitaria Antonio de Arévalo - Unitecnar, Cartagena</p>
          <p className="text-gray-600">Febrero 2020 – Noviembre 2023</p>
        </div>

        <div>
          <p><strong>Bachiller Académico</strong></p>
          <p>Institución Educativa Santa Ana de Ingeniería, Lima – Perú</p>
          <p className="text-gray-600">Febrero 2014 – Diciembre 2017</p>
        </div>
      </div>

      {/* Idiomas */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Idiomas</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Español:</strong> Nativo</li>
          <li><strong>Inglés:</strong> Nivel intermedio</li>
        </ul>
      </div>
    </section>
  );
};

export default Educacion;
