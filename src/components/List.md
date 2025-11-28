# Componente `List`

Componente accesible y presentacional que renderiza una tarjeta de artículo para un actor o intérprete.  
Muestra una imagen cuadrada, un nombre destacado y contenido descriptivo.

## Características de accesibilidad

- El `<article>` es accesible por teclado (`tabIndex="0"`).
- Usa `aria-label` con el nombre del actor y una nota adicional si participa en una película destacada.
- La imagen incluye `alt="Foto de {nombre}"`.
- Incluye un `figcaption` oculto (`sr-only`) con el contenido descriptivo para lectores de pantalla.

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `foto` | `string` | URL de la foto del actor. |
| `nombre` | `string` | Nombre completo del actor; aparece en el título, alt y aria-label. |
| `esNota10` | `boolean` | Si es `true`, destaca el nombre y añade una nota especial. |
| `children` | `ReactNode` | Biografía o descripción opcional (visible y también accesible en `figcaption`). |

## Ejemplo

```jsx
<List foto="/img/actor.jpg" nombre="María Pérez" esNota10>
  Breve biografía o nota sobre el actor.
</List>

