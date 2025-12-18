import { useState } from "react";

function AñadirPeliculaControlado() {

    const [formData, setFormData] = useState({ nombre: "", director: "", clasi: "", recau: "", nota: "", cartelera: "" });

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
        if (formData.director.length < 5) {
            setError("Tienes que ser minimo 5 caracteres")
            return
        }
        if (formData.nota < 1 || formData.nota > 10) {
            setError("El numero tiene que ser entre 1 y 10")
            return
        }
        if (!formData.cartelera.match(/^http/)) {
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
                <label htmlFor="director"
                className="block text-sm font-medium text-gray-700 mb-1">
                    Director
                </label>
                <input type="text" id="director" required value={formData.director} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <label htmlFor="clasi"
                className="block text-sm font-medium text-gray-700 mb-1">
                    Clasificacion
                </label>
                <input type="text" required id="clasi" value={formData.clasi} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <label htmlFor="recau"
                className="block text-sm font-medium text-gray-700 mb-1">
                    Recaudacion
                </label>
                <input type="text" id="recau" value={formData.recau} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <label htmlFor="nota"
                className="block text-sm font-medium text-gray-700 mb-1">
                    Nota
                </label>
                <input type="number" id="nota" required value={formData.nota} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />


                <label htmlFor="cartelera"
                className="block text-sm font-medium text-gray-700 mb-1">
                    Cartelera
                </label>
                <input type="url" required id="cartelera" value={formData.cartelera} onChange={handleChange} pattern="^http"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <div>
                    {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2"> {error}</p>}
                </div>

                <button type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                    Enviar
                </button>

            </form>
        </div>
    );


}
export default AñadirPeliculaControlado;