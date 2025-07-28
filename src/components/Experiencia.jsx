const Experiencia = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 bg-slate-100 border rounded">
      <h2 className="text-3xl font-bold mb-6 text-center">Experiencia Laboral</h2>

      {/* Cargo 1 */}
      <div className="mb-6">
        <h3 className="font-semibold text-base">Auxiliar de Servicio al Cliente</h3>
        <p className="italic text-gray-600">Enero 2025 – Julio 2025</p>
        <p className="mt-2 text-sm leading-relaxed text-justify">
          Encargado de gestionar y dar respuesta a PQRs relacionadas con predios desocupados,
          garantizando la trazabilidad completa del proceso desde la elaboración de la carta de respuesta
          hasta su notificación al usuario.
        </p>
      </div>

      {/* Cargo 2 */}
      <div className="mb-6 border-t pt-4">
        <h3 className="font-semibold text-base">Apoyo Administrativo</h3>
        <p className="italic text-gray-600">Dic. 2022 – Nov. 2023 | Mananuf Cocina 2020, Melgar, Colombia</p>
        <p className="mt-2 text-sm leading-relaxed text-justify">
          Registro de facturas y control de pagos. Proyección de informes financieros básicos, manejo de archivos
          y actualización de datos en sistemas contables.
        </p>
      </div>

      {/* Cargo 3 */}
      <div className="mb-6 border-t pt-4">
        <h3 className="font-semibold text-base">Auxiliar de Cocina</h3>
        <p className="italic text-gray-600">Abril 2022 – Ago. 2022 | Hotel Almirante, Cartagena</p>
        <p className="mt-2 text-sm leading-relaxed text-justify">
          Apoyo en actividades en la terraza y cocina principal: preparación de platos, control de inventarios,
          cumplimiento de normativas de higiene y seguridad alimentaria.
        </p>
      </div>

      {/* Cargo 4 */}
      <div className="mb-6 border-t pt-4">
        <h3 className="font-semibold text-base">Pasante de Gastronomía</h3>
        <p className="italic text-gray-600">Oct. 2021 – Abril 2022 | Hotel Almirante, Cartagena</p>
        <p className="mt-2 text-sm leading-relaxed text-justify">
          Tareas básicas de cocina como preparación de ingredientes, limpieza, apoyo en platos sencillos,
          reposición de alimentos y recepción de mercancías.
        </p>
      </div>

      {/* Cargo 5 */}
      <div className="mb-6 border-t pt-4">
        <h3 className="font-semibold text-base">Apoyo Administrativo</h3>
        <p className="italic text-gray-600">Feb. 2021 – Sept. 2021 | Mananuf Cocina 2020, Melgar, Colombia</p>
        <p className="mt-2 text-sm leading-relaxed text-justify">
          Registro de facturas, control de pagos, elaboración de informes financieros, y mantenimiento de archivos actualizados.
        </p>
      </div>

      {/* Cargo 6 */}
      <div className="border-t pt-4">
        <h3 className="font-semibold text-base">Auxiliar de Cocina</h3>
        <p className="italic text-gray-600">Nov. 2020 – Ene. 2021 | Mananuf Cocina 2020, Melgar, Colombia</p>
        <p className="mt-2 text-sm leading-relaxed text-justify">
          Apoyo en tareas básicas de cocina, limpieza y organización de espacios, preparación de platos simples,
          y apoyo en el servicio y almacenamiento de productos.
        </p>
      </div>
    </section>
  );
};

export default Experiencia;
