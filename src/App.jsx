import Header from "./components/Header";
import Router from "./components/Router";

/**
 * Top-level application component.
 *
 * Composes the global application layout by rendering the Header and Router components.
 *
 * @component
 * @returns {JSX.Element} The root application element containing Header and Router.
 */
function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
export default App;
