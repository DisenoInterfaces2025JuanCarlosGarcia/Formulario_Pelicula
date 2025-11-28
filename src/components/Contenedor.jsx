import { Outlet } from "react-router-dom";

/**
 * Contenedor component.
 *
 * Renders the primary layout container for a page section, including an optional title and a place
 * to render nested route content via <Outlet />.
 *
 * Accessibility & behavior:
 * - The root element is a <main> with id "main-content", role="main" and tabIndex="-1" to support
 *   programmatic focus and assistive technologies.
 * - The inner <section> is labeled by the heading using aria-labelledby="main-section-title".
 * - If `titulo` is provided, it is rendered as an <h1> with id "main-section-title".
 * - Layout and visual styling are applied via Tailwind CSS utility classes.
 *
 * Props:
 * @param {Object} props - Component props.
 * @param {string} [props.titulo] - Optional heading text displayed at the top of the section.
 *
 * Returns:
 * @returns {JSX.Element} The main container element that wraps the section title (if any) and an <Outlet /> for nested routes.
 *
 * Example:
 * <Contenedor titulo="Películas" />
 */
function Contenedor({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        {/* {children} */}
        {/* Aquí se muestra el contenido según la ruta */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;