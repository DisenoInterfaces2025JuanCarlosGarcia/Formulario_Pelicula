import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

/**
 * Componente Peliculas.
 *
 * Renderiza un listado de películas usando el arreglo `peliculas` disponible en el scope
 * y los componentes `Link` (de react-router) y `List`.
 *
 * Cada objeto de `peliculas` debe tener la siguiente forma:
 * @typedef {Object} Pelicula
 * @property {string|number} id - Identificador único usado como key y parte de la ruta.
 * @property {string} nombre - Título de la película.
 * @property {string} cartelera - URL o path de la imagen/cartel.
 * @property {string} clasificacion - Texto que se renderiza como children del componente List.
 *
 * Comportamiento:
 * - Mapea el arreglo `peliculas`.
 * - Por cada `pelicula` crea un <Link> a `/detalle/pelicula/{id}` con key={pelicula.id}.
 * - Dentro del <Link> renderiza un <List> con las props `nombre` y `foto` (usando `cartelera`) y
 *   con `clasificacion` como contenido hijo.
 *
 * Requisitos:
 * - `peliculas`, `Link` y `List` deben estar importados o disponibles en el scope donde se use este componente.
 *
 * @returns {JSX.Element} Elemento JSX que representa el listado de películas.
 */
function Peliculas() {
  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de películas</h2>
        <p className="text-gray-700 mb-6">
            Estas son los películas disponibles:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {peliculas.map((pelicula) => (
                <Link key={pelicula.id} to={`/detalle/pelicula/${pelicula.id}`}>
                    <List
                        // key={pelicula.id}  // No es necesario aquí porque el key está en el Link
                        nombre={pelicula.nombre}
                        foto={pelicula.cartelera}
                    >
                        {pelicula.clasificacion}
                    </List>
                </Link>
                ))
            }
        </div>
    </>
  );
}
export default Peliculas;