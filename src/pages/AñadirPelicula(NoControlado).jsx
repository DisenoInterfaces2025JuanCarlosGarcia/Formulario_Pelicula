import { useRef } from "react";

function AñadirPeliculaNoControlado() {

    const nombreRef = useRef(null);
    const directorRef = useRef(null);
    const clasiRef = useRef(null);
    const recauRef = useRef(null);
    const notaRef = useRef(null);
    const carteleraRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const datos = {
            nombre: nombreRef.current.value,
            director: directorRef.current.value,
            clasi: clasiRef.current.value,
            recau: recauRef.current.value,
            nota: notaRef.current.value,
            cartelera: carteleraRef.current.value
        };
        console.log("Datos enviados:", datos);

    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4" >

            <form onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"

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
                    ref={nombreRef}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="director"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Director
                </label>
                <input type="text" id="director" required ref={directorRef} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <label htmlFor="clasi"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Clasificacion
                </label>
                <input type="text" required id="clasi" ref={clasiRef} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <label htmlFor="recau"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Recaudacion
                </label>
                <input type="text" id="recau" ref={recauRef} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <label htmlFor="nota"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Nota
                </label>
                <input type="number" id="nota" required ref={notaRef} onChange={handleChange} aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />


                <label htmlFor="cartelera"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Cartelera
                </label>
                <input type="url" required id="cartelera" ref={carteleraRef} onChange={handleChange} pattern="^http"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out" />

                <button type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                    Enviar
                </button>

            </form>
        </div>
    );


}
export default AñadirPeliculaNoControlado;