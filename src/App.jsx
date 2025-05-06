import React from "react";
import {
   Home,
   MapPin,
   Bed,
   Bath,
   Maximize,
   Car,
   Phone,
   Mail,
   Calendar,
   CheckCircle2,
   ArrowRight,
} from "lucide-react";
import ThemeChanger from "./components/ThemeChanger";
import Header from "./layout/Header";
import env from "./constants/env";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./layout/Footer";
import Carousel from "./components/Carousel";

export default function App() {
   return (
      <div className="flex flex-col min-h-screen">
         {/* Header */}
         <Header />

         <main className="flex-1">
            {/* Hero Section */}
            <section id="property" className="relative bg-base-100">
               <div className="h-[60vh] md:h-[80vh] w-full relative">
                  <img
                     src="https://picsum.photos/1920/1080"
                     alt="Residencial Las Palmas"
                     className="object-cover w-full h-full opacity-20 dark:opacity-50"
                  />
                  <div className="absolute inset-0 bg-black/40 w-full flex items-end justify-center">
                     <div className="hidden container max-w-[90%] pb-8 md:pb-16 text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">
                           Residencial Las Palmas
                        </h1>
                        <div className="flex items-center mb-4">
                           <MapPin className="h-5 w-5 mr-2" />
                           <p className="text-lg">
                              Av. Principal 123, Zona Exclusiva
                           </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mb-6">
                           <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              <Bed className="h-4 w-4 mr-2" />
                              <span>3 Habitaciones</span>
                           </div>
                           <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              <Bath className="h-4 w-4 mr-2" />
                              <span>2 Baños</span>
                           </div>
                           <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              <Maximize className="h-4 w-4 mr-2" />
                              <span>180 m²</span>
                           </div>
                           <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              <Car className="h-4 w-4 mr-2" />
                              <span>2 Estacionamientos</span>
                           </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <button className="btn btn-lg bg-emerald-600 hover:bg-emerald-700">
                              Agendar visita
                           </button>
                           <button
                              // size="lg"
                              // variant="outline"
                              className="btn btn-lg btn-outline bg-white/10 text-white border-white hover:bg-white/20">
                              Descargar brochure
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="-mt-6 md:-mt-12 relative z-10 flex items-center justify-center">
                  <div className="bg-base-100  rounded-lg shadow-xl drop-shadow-lg p-6 w-full max-w-[90%] flex flex-col md:flex-row justify-between items-center">
                     <div className="mb-4 md:mb-0">
                        <p className="text-3xl font-bold">Area de filtros</p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-3">
                        <button className="btn bg-emerald-600 hover:bg-emerald-700">
                           <Phone className="h-4 w-4 mr-2" />
                           Llamar ahora
                        </button>
                        <button
                           variant="outline"
                           className="btn text-base-content">
                           <Mail className="h-4 w-4 mr-2" />
                           Enviar mensaje
                        </button>
                     </div>
                  </div>
               </div>
            </section>

            {/* Carrusel de Departamentos */}
            <Carousel />

            {/* Testimonials Section */}
            <section className="py-16 flex items-end justify-center ">
               <div className="container max-w-[90%]">
                  <h2 className="text-3xl font-bold text-center mb-12">
                     Lo que dicen nuestros clientes
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {[
                        {
                           name: "María González",
                           role: "Propietaria",
                           quote: "El proceso de compra fue muy sencillo gracias al profesionalismo del equipo. Encontramos nuestra casa ideal en tiempo récord.",
                        },
                        {
                           name: "Juan Pérez",
                           role: "Inversionista",
                           quote: `He trabajado con varios agentes inmobiliarios, pero ninguno tan dedicado y conocedor del mercado como el equipo de ${env.bussinessName}.`,
                        },
                        {
                           name: "Laura Sánchez",
                           role: "Compradora",
                           quote: "Excelente atención desde el primer contacto. Me ayudaron a encontrar exactamente lo que buscaba dentro de mi presupuesto.",
                        },
                     ].map((testimonial, index) => (
                        <div
                           key={index}
                           className="bg-base-200/50 p-6 rounded-lg shadow-sm">
                           <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                 <img
                                    src={`https://picsum.photos/100/10${index}`}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                 />
                              </div>
                              <div>
                                 <h3 className="font-semibold">
                                    {testimonial.name}
                                 </h3>
                                 <p className="text-sm text-gray-500">
                                    {testimonial.role}
                                 </p>
                              </div>
                           </div>
                           <p className="text-gray-600 italic">
                              "{testimonial.quote}"
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
         </main>

         {/* Footer */}
         <Footer />
      </div>
   );
}
