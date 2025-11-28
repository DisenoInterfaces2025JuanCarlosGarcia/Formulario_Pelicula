
/**
 * Detail React component.
 *
 * Renders detailed information for a selected movie or, if the route includes an interpreter index,
 * renders detailed information for a specific actor (intérprete) of that movie.
 *
 * Behavior:
 * - Reads route parameters via useParams(): idPeli (movie id as string) and optional idInterprete (actor index as string).
 * - Resolves the movie from a surrounding `peliculas` collection using Number(idPeli).
 * - If no matching movie is found, returns a centered error paragraph.
 * - If idInterprete is present, looks up the actor by index in pelicula.actores:
 *   - If actor is missing, returns a centered error paragraph.
 *   - Otherwise renders actor detail (image, name, biography) and a "Volver" button that calls navigate(-1).
 * - If idInterprete is not present, renders the movie detail (title, poster, summary, actors grid).
 *   - Each actor item links to /detalle/pelicula/:id/interprete/:index and uses a List component to show actor info.
 *   - The movie view includes a "Volver" button that navigates to "/peliculas".
 *
 * Relies on:
 * - React Router hooks: useParams() and useNavigate().
 * - A surrounding `peliculas` array in scope with the following shape:
 *
 *   @typedef {Object} Actor
 *   @property {string} nombre - Actor's display name.
 *   @property {string} imagen - URL for the actor's image (used as img src and alt).
 *   @property {string} biografia - Short biography or description for the actor.
 *
 *   @typedef {Object} Pelicula
 *   @property {number} id - Numeric movie identifier.
 *   @property {string} nombre - Movie title.
 *   @property {string} cartelera - URL for the movie poster image.
 *   @property {string} resumen - Movie summary/description.
 *   @property {number} nota - Numeric rating (used to compute esNota10 for actor list items).
 *   @property {Actor[]} actores - Array of Actor objects.
 *
 * Accessibility and UI notes:
 * - Images include alt text set to actor.nombre or pelicula.nombre.
 * - Actor links include an aria-label describing the target interpreter for screen readers.
 * - Buttons include focus styles and descriptive labels ("Volver").
 *
 * @component
 * @returns {JSX.Element} A React element representing either the movie detail view or an actor detail view,
 *                        or a simple error paragraph if the requested resource is not found.
 */

import { useParams, useNavigate, Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";
function Detail() {
  const { idPeli, idInterprete } = useParams();
  const navigate = useNavigate();

  const pelicula = peliculas.find(p => p.id === Number(idPeli));
  if (!pelicula) {
    return <p className="text-center text-red-600 mt-8">No se ha encontrado la película solicitada.</p>;
  }

  // Detalle de actores si es un Intérprete
  if (idInterprete !== undefined) {
    const actor = pelicula.actores[idInterprete];
    if (!actor) {
      return <p className="text-center text-red-600 mt-8">No se ha encontrado el intérprete solicitado.</p>;
    }

    return (
      <article className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        <figure className="w-full md:w-64 shrink-0">
          <img
            src={actor.imagen}
            alt={actor.nombre}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </figure>
        <section className="flex-1 flex flex-col gap-4">
          <header className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{actor.nombre}</h1>
            <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
            Volver
            </button>
          </header>
          <p className="text-lg leading-relaxed">{actor.biografia}</p>
        </section>
      </article>
    );
  }

  // Si no es un Intérprete, muestra el Detalle de la película y sus actores
  return (
    <article className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{pelicula.nombre}</h1>
        <button
          onClick={() => navigate("/peliculas")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Volver
        </button>
      </header>

    <figure className="flex justify-center mb-4">
    <img
        src={pelicula.cartelera}
        alt={pelicula.nombre}
        className="w-full max-w-md rounded-lg shadow-md object-cover"
    />
    </figure>

      <section className="flex-1 flex flex-col gap-4">
        <p className="text-lg leading-relaxed">{pelicula.resumen}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Actores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pelicula.actores.map((actor, index) => (
            <Link
            key={index}
            to={`/detalle/pelicula/${pelicula.id}/interprete/${index}`}
            aria-label={`Ver detalles del intérprete ${actor.nombre}`}
            >
            <List
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10}
            >
                {actor.biografia}
            </List>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
export default Detail;