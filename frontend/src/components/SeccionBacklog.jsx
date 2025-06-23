import { useState } from "react";

export default function BacklogSection() {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [formData, setFormData] = useState({
    fecha: "",
    equipo: "",
    descripcion: "",
    parte: "",
    prioridad: "P1",
    responsable: "",
    turno: "A1",
    grupo: "G1",
    accion: "Abierta",
    imagen: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagen") {
      setFormData((prev) => ({ ...prev, imagen: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica para enviar el backlog
    console.log("Enviando backlog:", formData);
    // Luego limpiar formulario si quieres:
    // setFormData({...});
  };

  return (
    <section id="seccion-backlog" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6">Reporte de backlog.</h2>

        <div className="mb-8">
          <a
            href="#backlog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Reporta tu backlog
          </a>
        </div>

        <div
          id="backlog"
          className="mb-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto"
        >
          <form
            id="backlogForm"
            onSubmit={handleSubmit}
            className="space-y-6"
            encType="multipart/form-data"
          >
            <label className="block">
              Fecha:
              <input
                type="date"
                name="fecha"
                required
                value={formData.fecha}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              Equipo:
              <select
                name="equipo"
                required
                value={formData.equipo}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Seleccione equipo
                </option>
                {Array.from({ length: 20 }, (_, i) => 137 + i).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              Descripción:
              <textarea
                name="descripcion"
                rows="3"
                required
                value={formData.descripcion}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              Parte:
              <input
                type="text"
                name="parte"
                placeholder="Si no tiene colocar (No o Ningúna)"
                required
                value={formData.parte}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              Prioridad:
              <select
                name="prioridad"
                required
                value={formData.prioridad}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {["P1", "P2", "P3", "P4"].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              Responsable:
              <input
                type="text"
                name="responsable"
                required
                value={formData.responsable}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              Turno:
              <select
                name="turno"
                required
                value={formData.turno}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {["A1", "A2"].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              Grupo:
              <select
                name="grupo"
                required
                value={formData.grupo}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {["G1", "G2", "G3"].map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              Acción:
              <select
                name="accion"
                required
                value={formData.accion}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {["Abierta", "Cerrada"].map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              Imagen:
              <input
                type="file"
                name="imagen"
                accept="image/*"
                capture="environment"
                onChange={handleInputChange}
                className="mt-1 block w-full"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Enviar BACKLOG
            </button>
          </form>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Registros de BACKLOG</h2>
        <button
          id="mostrarTablaBACKLOG"
          onClick={() => setMostrarTabla((v) => !v)}
          className="mb-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
        >
          {mostrarTabla ? "Ocultar tabla BACKLOG" : "Mostrar tabla BACKLOG"}
        </button>

        {mostrarTabla && (
          <div
            id="contenedorTablaBACKLOG"
            className="overflow-x-auto max-w-full"
          >
            <table
              id="backlogTable"
              className="min-w-full border-collapse border border-gray-300"
            >
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2 text-center">
                    Fecha
                    <br />
                    <input
                      type="date"
                      id="filtroFecha"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-1"
                    />
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Equipo
                    <br />
                    <select
                      id="filtroEquipo"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-1"
                    >
                      <option value="">Todas</option>
                      {Array.from({ length: 19 }, (_, i) => 137 + i).map(
                        (num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        )
                      )}
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Descripción
                  </th>
                  <th className="border border-gray-300 p-2 text-center">Parte</th>
                  <th className="border border-gray-300 p-2 text-center">
                    Prioridad
                    <br />
                    <select
                      id="filtroPrioridad"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-1"
                    >
                      <option value="">Todas</option>
                      {["P1", "P2", "P3", "P4"].map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Responsable
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Turno
                    <br />
                    <select
                      id="filtroTurno"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-1"
                    >
                      <option value="">Todas</option>
                      {["A1", "A2"].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Grupo
                    <br />
                    <select
                      id="filtroGrupo"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-1"
                    >
                      <option value="">Todas</option>
                      {["G1", "G2", "G3"].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Acción
                    <br />
                    <select
                      id="filtroAccion"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-1"
                    >
                      <option value="">Todas</option>
                      {["Abierta", "Cerrada"].map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th className="border border-gray-300 p-2 text-center">Imagen</th>
                </tr>
              </thead>
              <tbody>{/* Aquí van los registros con filtro */}</tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}