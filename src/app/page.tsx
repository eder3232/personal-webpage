import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sección Inicio */}
      <section
        id="inicio"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            ¡Hola! Soy Tu Nombre
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Desarrollador Full Stack apasionado por crear experiencias digitales
            increíbles
          </p>
          <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700">
            Ver Proyectos
          </button>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section
        id="sobre-mi"
        className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Sobre Mí
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Soy un desarrollador apasionado por la tecnología y la innovación.
            Me especializo en crear aplicaciones web modernas y escalables
            utilizando las últimas tecnologías y mejores prácticas.
          </p>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section
        id="proyectos"
        className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Mis Proyectos
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Aquí puedes ver algunos de los proyectos en los que he trabajado.
            Cada uno representa un desafío único y una oportunidad de
            aprendizaje.
          </p>
        </div>
      </section>

      {/* Sección Contacto */}
      <section
        id="contacto"
        className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Contacto
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            ¿Te gustaría trabajar juntos en un proyecto? ¡No dudes en
            contactarme! Estoy siempre abierto a nuevas oportunidades.
          </p>
        </div>
      </section>
    </main>
  );
}
