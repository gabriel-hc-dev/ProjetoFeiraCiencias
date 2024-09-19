import React from 'react'

const login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 select-none">
            <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md md:flex-row">
                <div className="w-full p-8 md:w-1/2">
                    <div className="flex justify-center mb-8">
                        {/* Espaço para Imagem */}
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-700 md:text-3xl">Logar</h2>
                        <p className="mb-6 text-sm text-gray-600 md:text-base">Não possui conta? <a href="./login.js" className="text-green-600 hover:underline">Cadastrar</a></p>

                    <form action="" method="POST" className="bg-white">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 md:text-base">Identificação:</label>
                            <input type="email" id="email" className="w-full px-4 py-2 leading-tight bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-green-600" placeholder="Código de identificação" required />
                        </div>

                        <div className="mb-6">
                            <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-white bg-green-500 border-2 border-gray-200 rounded-lg hover:bg-green-600 transition ease-in-out duration-300">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>

                <div className="hidden md:block md:w-1/2">
                    <div className="object-cover w-full h-full bg-green-500">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login