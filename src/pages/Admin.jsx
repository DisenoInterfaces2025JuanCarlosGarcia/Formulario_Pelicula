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
import { useState } from "react";
import AñadirInterprete from "../pages/AñadirInerprete"
import AñadirPeliculaControlado from "../pages/AñadirPelicula(Controlado)" 
import AñadirPeliculaNoControlado from "../pages/AñadirPelicula(NoControlado)"

function Admin() {
  const [tab,setTab] = useState("controlado")

  return (
    <>
    
      <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>
      
      <div>
      <button
      onClick={()=> setTab("controlado")}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Añadir pelicula (Controlado)
      </button>
      <button
      onClick={()=> setTab("nocontrolado")}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Añadir pelicula (No Controlado)
      </button>
       <button
      onClick={()=> setTab("interprete")}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Añadir Interprete
      </button>

      </div>
      <section>
        {tab=== "controlado" && <AñadirPeliculaControlado/>}
        {tab === "nocontrolado" && <AñadirPeliculaNoControlado/>}
        {tab === "interprete" && <AñadirInterprete/>}

      </section>
    </>
  );
}
export default Admin;