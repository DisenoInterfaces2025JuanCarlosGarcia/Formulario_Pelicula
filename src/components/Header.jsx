import Nav from "./Nav";

/**
 * Header component that renders the top page header with a site title and navigation.
 *
 * The component returns a semantic <header> element styled with Tailwind CSS utility classes.
 * It displays the application title ("Películas") and includes a Nav component to render
 * navigation links. The Nav component must be imported or defined in the same scope.
 *
 * This component accepts no props.
 *
 * @component
 * @returns {JSX.Element} The header element containing the title and navigation.
 * @example
 * // Render the header at the top of a page or layout
 * <Header />
 * @see Nav
 */
function Header() {

  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
