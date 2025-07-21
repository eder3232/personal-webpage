"use client";
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
          <Button
            size="lg"
            className="px-8 py-6 text-xl font-medium"
            onClick={() => {
              document.getElementById("proyectos")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
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
        className="min-h-screen bg-gray-50 py-16 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Mis Aplicaciones
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Herramientas prácticas diseñadas para resolver problemas reales.
              Cada aplicación está optimizada para ser rápida, confiable y fácil
              de usar.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {/* Firmador de PDFs */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
              <div className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <svg
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Firmador de PDFs
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Agrega firmas digitales a tus documentos PDF de forma rápida y
                  segura. Ideal para contratos, documentos legales y
                  formularios.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Firma múltiples páginas
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Interfaz intuitiva
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Descarga inmediata
                  </div>
                </div>
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() =>
                    window.open("https://pegafirmas.vercel.app/", "_blank")
                  }
                >
                  Usar Firmador
                </Button>
              </div>
            </div>

            {/* Folidador */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
              <div className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <svg
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Folidador
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Agrega numeración automática a tus documentos PDF. Perfecto
                  para tesis, manuales y documentos largos.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Numeración automática
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Personalizable
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Procesamiento rápido
                  </div>
                </div>
                <Button
                  className="w-full bg-green-600 text-white hover:bg-green-700"
                  onClick={() =>
                    window.open(
                      "https://foliador-pdf-eder3232.netlify.app/",
                      "_blank",
                    )
                  }
                >
                  Usar Folidador
                </Button>
              </div>
            </div>

            {/* Convertidor de Coordenadas */}
            {/* <div className="rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
              <div className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <svg
                    className="h-8 w-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Convertidor de Coordenadas
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Convierte coordenadas entre diferentes sistemas de referencia.
                  Esencial para topografía, cartografía y navegación.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Múltiples formatos
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Precisión alta
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    Conversión instantánea
                  </div>
                </div>
                <Button
                  className="w-full bg-purple-600 text-white hover:bg-purple-700"
                  onClick={() =>
                    window.open("https://coordenadas.eder3232.com", "_blank")
                  }
                >
                  Usar Convertidor
                </Button>
              </div>
            </div> */}
          </div>

          {/* Sección adicional con enlace a GitHub */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              ¿Quieres ver más proyectos o contribuir?
            </p>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://github.com/eder3232", "_blank")
              }
              className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Ver en GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section
        id="contacto"
        className="min-h-screen bg-white py-16 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Contacto
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              ¿Te gustaría trabajar juntos en un proyecto o tienes alguna
              pregunta? Estoy siempre abierto a nuevas oportunidades y
              colaboraciones.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  ¿Quieres contactarme?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Estoy siempre abierto a nuevas oportunidades y colaboraciones
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Principal */}
                <div className="text-center">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Email de contacto
                  </p>
                  <p className="mb-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
                    eldebar.dk@gmail.com
                  </p>
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open("mailto:eldebar.dk@gmail.com", "_blank")
                    }
                    className="bg-blue-600 px-8 text-white hover:bg-blue-700"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Enviar Email
                  </Button>
                </div>

                {/* Información adicional */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                      <svg
                        className="h-5 w-5 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Respuesta
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      En 24h
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Trabajo
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Remoto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
