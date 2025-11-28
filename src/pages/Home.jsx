/**
 * Home component.
 *
 * Componente funcional que renderiza un título de bienvenida y una breve
 * descripción indicando que esta es la página principal de la aplicación.
 *
 * Renders a heading ("Bienvenido") and a paragraph describing that this is the
 * application's main page.
 *
 * @component
 * @returns {JSX.Element} Fragment containing the page heading and description.
 */
function Home() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Bienvenido</h2>
      <p>Esta es la página principal de la aplicación.</p>
    </>
  );
}
export default Home;
