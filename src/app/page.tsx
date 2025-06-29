import { Button } from "@/components/ui/button";
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
            eder3232
          </h1>
          <p className="mb-8 text-3xl text-gray-600 dark:text-gray-300">
            Tecnología para un mundo mejor
          </p>
          <Button size="lg" className="px-8 py-6 text-xl font-medium">
            Ver Proyectos
          </Button>
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
            En el vasto lienzo de la existencia, donde el sufrimiento y el dolor
            a menudo trazan sus sombras, encuentro en la tecnología un faro. No
            busco la belleza ilusoria, sino la utilidad transformadora; la que
            alivia cargas, acorta distancias y, en su ingenio, nos acerca a la
            visión de un horizonte menos arduo. Es por ello que mi camino se
            traza en el código y la innovación: tecnología para un mundo mejor,
            una pulsación que busca mitigar y construir puentes sobre las
            asperezas de la vida.
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
