import { useState } from 'react';
import peliculas from "../data/peliculas"

function Formulario() {


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4" >
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
                noValidate
            >
                <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                    Formulario de Discos
                </div>
                <label htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre:
                </label>
                <input
                    id='nombre'
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="grupo"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Grupo:
                </label>
                <input
                    id='grupo'
                    type="text"
                    value={formData.grupo}
                    onChange={handleChange}
                    required
                    aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="año"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Año:
                </label>
                <input
                    id='año'
                    type="number"
                    minLength={4}
                    maxLength={4}
                    value={formData.año}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="tipo"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo:
                </label>

                <select
                    id='tipo'
                    value={formData.tipo}
                    required
                    aria-invalid={!!error}
                    onChange={(e) => setFormData({
                        ...formData,
                        tipo: e.target.value
                    })}

                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                    {peliculas.map((pelicula)=>
                    <option value={pelicula.nombre}>{pelicula.nombre}</option>
                    )}
                </select>

                <label htmlFor="localizacion"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Localizacion:
                </label>
                <input
                    id='localizacion'
                    type="text"
                    pattern="ES-[0-9]{3}[A-Z]{2}"
                    value={formData.localizacion}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="prestado"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    prestado:
                </label>
                <input
                    id='prestado'
                    type="checkbox"
                    checked={formData.prestado}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <div>
                    {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error}</p>}
                </div>
                <div>
                    <button type='submit'
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                        Enviar
                    </button>
                </div>

            </form>
        </div>
    )



}
export default Formulario;