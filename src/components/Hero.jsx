import React from 'react'

export default function Hero() {
  return (
    <main>
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div>
              <p className="body-sm uppercase tracking-widest text-gray-500 font-medium mb-4">
                Diseñadora de producto y marca
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 max-w-2xl">
                Hola, soy Elia
              </h1>
              <p className="body-lg max-w-xl mb-12 font-light text-primary text-base">
                Con más de 10 años de experiencia, creo productos intuitivos e identidades visuales sólidas. Creo que el buen diseño es invisible, simplemente funciona. Hola que tal
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-200"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}