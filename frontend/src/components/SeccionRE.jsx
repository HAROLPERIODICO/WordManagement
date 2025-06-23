import { useState } from "react";

export default function SeccionRE() {
  // Estado para mostrar/ocultar tabla
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => setShowTable(!showTable);

  return (
    <section id="seccion-re" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Reportes RE</h2>

        {/* Llamado a la acción RE */}
        <div className="mb-6">
          <a
            href="#re"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
          >
            ¡Reporta! RE
          </a>
        </div>

        {/* FORMULARIO con scroll horizontal */}
        <div
          id="re"
          className="overflow-x-auto border border-gray-300 rounded p-4 bg-white mb-10"
          style={{ maxWidth: "100%" }}
        >
          <form
            id="reForm"
            encType="multipart/form-data"
            className="min-w-[700px] grid grid-cols-1 gap-6"
          >
            <label className="flex flex-col">
              Fecha:
              <input
                type="date"
                name="fecha"
                required
                className="mt-1 p-2 border rounded"
              />
            </label>

            <label className="flex flex-col">
              Equipo:
              <select
                name="equipo"
                required
                className="mt-1 p-2 border rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  Seleccione equipo
                </option>
                {[...Array(20)].map((_, i) => (
                  <option key={i} value={137 + i}>
                    {137 + i}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col">
              Descripción:
              <textarea
                name="descripcion"
                rows="3"
                required
                className="mt-1 p-2 border rounded resize-none"
              />
            </label>

            <label className="flex flex-col">
              Parte:
              <input
                type="text"
                name="parte"
                placeholder="Si no tiene (No o Ningúna)"
                required
                className="mt-1 p-2 border rounded"
              />
            </label>

            <label className="flex flex-col">
              Prioridad:
              <select
                name="prioridad"
                required
                className="mt-1 p-2 border rounded"
                defaultValue="P1"
              >
                <option value="P1">P1</option>
              </select>
            </label>

            <label className="flex flex-col">
              Responsable:
              <input
                type="text"
                name="responsable"
                required
                className="mt-1 p-2 border rounded"
              />
            </label>

            <label className="flex flex-col">
              Turno:
              <select
                name="turno"
                required
                className="mt-1 p-2 border rounded"
                defaultValue="A1"
              >
                <option value="A1">A1</option>
                <option value="A2">A2</option>
              </select>
            </label>

            <label className="flex flex-col">
              Grupo:
              <select
                name="grupo"
                required
                className="mt-1 p-2 border rounded"
                defaultValue="G1"
              >
                <option value="G1">G1</option>
                <option value="G2">G2</option>
                <option value="G3">G3</option>
              </select>
            </label>

            <label className="flex flex-col">
              Acción:
              <select
                name="accion"
                required
                className="mt-1 p-2 border rounded"
                defaultValue="Abierta"
              >
                <option value="Abierta">Abierta</option>
                <option value="Cerrada">Cerrada</option>
              </select>
            </label>

            <label className="flex flex-col">
              Imagen:
              <input
                type="file"
                name="imagen"
                id="imagenInput"
                accept="image/*"
                capture="environment"
                className="mt-1"
              />
            </label>

            <button
              type="submit"
              className="col-span-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Botón para mostrar/ocultar tabla */}
        <div className="mb-4">
          <button
            onClick={toggleTable}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            {showTable ? "Ocultar tabla RE" : "Mostrar tabla RE"}
          </button>
        </div>

        {/* TABLA con scroll horizontal */}
        {showTable && (
          <div
            id="contenedorTablaRE"
            className="overflow-x-auto border border-gray-300 rounded bg-white"
            style={{ maxWidth: "100%" }}
          >
            <table
              id="reTable"
              className="min-w-[900px] w-full border-collapse border border-gray-300 text-left"
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">
                    Fecha
                    <br />
                    <input
                      type="date"
                      id="filtroFecha"
                      className="mt-1 p-1 border rounded w-full"
                    />
                  </th>
                  <th className="border border-gray-300 p-2">
                    Equipo
                    <br />
                    <select
                      id="filtroEquipo"
                      className="mt-1 p-1 border rounded w-full"
                      defaultValue=""
                    >
                      <option value="">Todas</option>
                      {[...Array(20)].map((_, i) => (
                        <option key={i} value={137 + i}>
                          {137 + i}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2">Descripción</th>
                  <th className="border border-gray-300 p-2">Parte</th>
                  <th className="border border-gray-300 p-2">
                    Prioridad
                    <br />
                    <select
                      id="filtroPrioridad"
                      className="mt-1 p-1 border rounded w-full"
                      defaultValue=""
                    >
                      <option value="">Todas</option>
                      <option value="P1">P1</option>
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2">Responsable</th>
                  <th className="border border-gray-300 p-2">
                    Turno
                    <br />
                    <select
                      id="filtroTurno"
                      className="mt-1 p-1 border rounded w-full"
                      defaultValue=""
                    >
                      <option value="">Todas</option>
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2">
                    Grupo
                    <br />
                    <select
                      id="filtroGrupo"
                      className="mt-1 p-1 border rounded w-full"
                      defaultValue=""
                    >
                      <option value="">Todas</option>
                      <option value="G1">G1</option>
                      <option value="G2">G2</option>
                      <option value="G3">G3</option>
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2">
                    Acción
                    <br />
                    <select
                      id="filtroAccion"
                      className="mt-1 p-1 border rounded w-full"
                      defaultValue=""
                    >
                      <option value="">Todas</option>
                      <option value="Abierta">Abierta</option>
                      <option value="Cerrada">Cerrada</option>
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2">Imagen</th>
                  
                </tr>
              </thead>
              <tbody>
                {/* Aquí irían las filas dinámicas */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}