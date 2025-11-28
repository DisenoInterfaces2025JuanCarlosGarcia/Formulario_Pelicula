/**
 * Componente Admin — Panel de Administración.
 *
 * Componente funcional presentacional que renderiza un encabezado y una breve
 * descripción indicando que allí se colocarían las herramientas de administración.
 *
 * Uso:
 * <Admin />
 *
 * Notas:
 * - No recibe props ni mantiene estado.
 * - Utiliza clases de Tailwind CSS para el estilo.
 *
 * @component
 * @returns {JSX.Element} Fragmento con el título del panel y una descripción.
 */
function Admin() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>
      <p>Aquí irían las herramientas de administración.</p>
    </>
  );
}
export default Admin;