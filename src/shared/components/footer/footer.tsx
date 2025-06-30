import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Sección principal con lema destacado */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            eder3232
          </h2>
          <p className="mb-2 text-xl font-medium text-purple-200 md:text-2xl">
            Tecnología para un mundo mejor
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
        </div>

        <Separator className="mb-8 bg-purple-600/30" />

        {/* Enlaces a redes sociales */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* TikTok */}
          <Card className="border-purple-500/30 bg-white/10 transition-all duration-300 hover:bg-white/15">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-purple-200">
                    Mi Canal de TikTok
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">
                    Sígueme en TikTok para contenido divertido y tecnológico
                  </p>
                  <p className="font-medium text-purple-300">@eder_vlog</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white"
                  onClick={() =>
                    window.open("https://tiktok.com/@eder_vlog", "_blank")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Canal
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="border-purple-500/30 bg-white/10 transition-all duration-300 hover:bg-white/15">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-purple-200">
                    Mi Repositorio GitHub
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">
                    Aquí encontrarás todos mis proyectos y contribuciones
                  </p>
                  <p className="font-medium text-purple-300">eder3232</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white"
                  onClick={() =>
                    window.open("https://github.com/eder3232", "_blank")
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  Ver Proyectos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-purple-600/30 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 eder3232. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
