import peliculas from "../data/peliculas"
import { useState } from "react";

function Interprete() {

    const [formData, setFormData] = useState({ pelicula: "", nombre: "", fnac: "", biografia: "", imagen: ""});

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.nombre.length < 5) {
            setError("Tienes que ser minimo 5 caracteres")
            return
        }
        if (formData.biografia.length < 50) {
            setError("Tienes que ser minimo 50 caracteres")
            return
        }
        if (!formData.imagen.match(/^http/)) {
            setError("La cartelera tiene que empezar por http")
            return
        }
        setError("")
        console.log(formData)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4" >

            <form onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
                noValidate
            >
               <label htmlFor="pelicula">
                Pelicula
               </label>
                <div>
                    {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2"> {error}</p>}
                </div>
                  <select
                    id='pelicula'
                    value={formData.pelicula}
                    required
                    aria-invalid={!!error}
                    onChange={(e) => setFormData({
                        ...formData,
                        pelicula: e.target.value
                    })}

                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                    {peliculas.map((pelicula)=>
                    <option value={pelicula.nombre}>{pelicula.nombre}</option>
                    )}
                </select>
                 <label htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Nombre
                </label>

                <input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="fnac">
                    fecha Nacimiento
                </label>
                <input type="date" id="fnac" value={formData.fnac} onChange={handleChange} />
                
                  <label htmlFor="biografia"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Biografia
                </label>

                <input
                    id="nombre"
                    type="text"
                    required
                    value={formData.biografia}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="imagen"
                className="block text-sm font-medium text-gray-700 mb-1">
                    Imagen
                </label>
                <input type="url" required id="Imagen" value={formData.imagen} onChange={handleChange} pattern="^http"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                

                <button type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                    Enviar
                </button>

            </form>
        </div>
    );
}
export default Interprete;