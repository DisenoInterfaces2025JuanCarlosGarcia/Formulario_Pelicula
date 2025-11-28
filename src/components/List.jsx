

/**
 * List
 *
 * Accessible presentational component that renders an article card for an actor/performer.
 * The component displays a square image, a visually prominent name heading, an optional
 * highlighted state (esNota10) and descriptive content provided via children.
 *
 * Accessibility & behavior notes:
 * - The root <article> is keyboard-focusable (tabIndex="0") to allow keyboard users to reach it.
 * - An accessible label is applied via aria-label: it contains the actor name and, when esNota10 is true,
 *   a short hint indicating the actor is in a featured movie.
 * - The image includes an alt attribute describing the subject ("Foto de {nombre}").
 * - A visually-hidden figcaption (sr-only) is included to expose any extra descriptive children content
 *   to assistive technologies while keeping it visually hidden.
 *
 * Props:
 * @param {Object} props - Component props.
 * @param {string} props.foto - URL of the actor's photo used as the image src.
 * @param {string} props.nombre - The actor's full name; used in the heading, aria-label and image alt text.
 * @param {boolean} [props.esNota10=false] - If true, the heading is styled as highlighted and the aria-label
 *                                           includes a "featured" note; a small emphasis text is rendered after the name.
 * @param {import('react').ReactNode} [props.children] - Optional description/biography content. This content is rendered
 *                                                      visually in a paragraph and also provided (visually hidden) as a figcaption
 *                                                      for screen reader users.
 *
 * @returns {import('react').JSX.Element} A JSX element representing the article card.
 *
 * @example
 * // <List foto="/img/actor.jpg" nombre="María Pérez" esNota10>
 * //   Breve biografía o nota sobre el actor.
 * // </List>
 */
function List(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        
        <article
            tabIndex="0" // Permite navegar con Tab
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`${nombre}${esNota10 ? ', intérprete en película destacada' : ''}`}
        >
            {/* Imagen del intérprete con figcaption oculto para lectores de pantalla */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                    esNota10 ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    {/* Nombre del intérprete */}
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete en película destacada</em>}
                </h2>
            </header>
            {/* Biografía o descripción */}
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>

    );
}

export default List;


