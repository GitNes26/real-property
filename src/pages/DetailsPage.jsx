import React from "react";
import {
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
import Header from "../layout/Header";
import env from "../constants/env";
import Footer from "../layout/Footer";

export default function DetailsPage() {
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
                     <div className="container max-w-[90%] pb-8 md:pb-16 text-white">
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
                        <p className="text-accent-content mb-1">
                           Precio de venta
                        </p>
                        <p className="text-3xl font-bold text-emerald-600">
                           $4,500,000 MXN
                        </p>
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

            {/* Features Section */}
            <section
               id="features"
               className="py-16 bg-base-100 w-full flex items-end justify-center">
               <div className="container max-w-[90%]">
                  <h2 className="text-3xl font-bold text-center mb-12">
                     Características Destacadas
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                           <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                           Acabados de lujo
                        </h3>
                        <p className="text-gray-600">
                           Materiales de primera calidad en todos los espacios,
                           con detalles en mármol y madera.
                        </p>
                     </div>

                     <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                           <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                           Seguridad 24/7
                        </h3>
                        <p className="text-gray-600">
                           Sistema de vigilancia con cámaras y personal de
                           seguridad las 24 horas del día.
                        </p>
                     </div>

                     <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                           <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                           Áreas comunes
                        </h3>
                        <p className="text-gray-600">
                           Disfruta de alberca, gimnasio, salón de eventos y
                           áreas verdes para toda la familia.
                        </p>
                     </div>

                     <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                           <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                           Ubicación privilegiada
                        </h3>
                        <p className="text-gray-600">
                           A minutos de centros comerciales, escuelas y
                           principales vías de acceso.
                        </p>
                     </div>

                     <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                           <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                           Cocina equipada
                        </h3>
                        <p className="text-gray-600">
                           Electrodomésticos de alta gama incluidos y amplia
                           alacena para todas tus necesidades.
                        </p>
                     </div>

                     <div className="bg-base-200 p-6 rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                           <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                           Eficiencia energética
                        </h3>
                        <p className="text-gray-600">
                           Paneles solares, sistema de captación de agua pluvial
                           y materiales sustentables.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* Gallery Section */}
            <section
               id="gallery"
               className="py-16 flex items-end justify-center">
               <div className="container max-w-[90%]">
                  <h2 className="text-3xl font-bold text-center mb-12">
                     Galería de imágenes
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                           key={item}
                           className="relative h-64 overflow-hidden rounded-lg">
                           <img
                              src={`https://picsum.photos/600/80${item}`}
                              alt={`imgn ${item} del inmueble`}
                              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                           />
                        </div>
                     ))}
                  </div>

                  <div className="text-center mt-8">
                     <button variant="outline" className="btn gap-2">
                        Ver todas las imágenes
                        <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>
               </div>
            </section>

            {/* Agent Section */}
            <section
               id="agent"
               className="py-16 flex items-end justify-center bg-gray-50">
               <div className="container max-w-[90%]">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                     <div className="md:w-1/3">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden mx-auto">
                           <img
                              src={`https://picsum.photos/400/400`}
                              alt="Agente Inmobiliario"
                              className="object-cover w-full h-full"
                           />
                        </div>
                     </div>

                     <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">
                           Tu Asesor Inmobiliario
                        </h2>
                        <h3 className="text-xl text-emerald-600 font-semibold mb-4">
                           Carlos Rodríguez
                        </h3>
                        <p className="text-gray-600 mb-6">
                           Con más de 10 años de experiencia en el sector
                           inmobiliario, me especializo en propiedades de lujo y
                           residenciales. Mi compromiso es encontrar el hogar
                           perfecto para ti y tu familia, brindando un servicio
                           personalizado en cada etapa del proceso.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                           <button className="btn bg-emerald-600 hover:bg-emerald-700 gap-2">
                              <Phone className="h-4 w-4" />
                              (123) 456-7890
                           </button>
                           <button variant="outline" className="btn gap-2">
                              <Mail className="h-4 w-4" />
                              carlos@inmoprime.com
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Contact Section */}
            <section
               id="contact"
               className="py-16 flex items-end justify-center">
               <div className="container max-w-[90%]">
                  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                     <div className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-6">
                           ¿Interesado en esta propiedad?
                        </h2>
                        <p className="text-center text-gray-600 mb-8">
                           Completa el formulario y nos pondremos en contacto
                           contigo a la brevedad para resolver todas tus dudas o
                           agendar una visita.
                        </p>

                        <form className="space-y-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                 <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre completo
                                 </label>
                                 <input
                                    id="name"
                                    placeholder="Tu nombre"
                                    className="input input-sm"
                                 />
                              </div>
                              <div>
                                 <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 mb-1">
                                    Teléfono
                                 </label>
                                 <input
                                    id="phone"
                                    placeholder="Tu teléfono"
                                    className="input input-sm"
                                 />
                              </div>
                           </div>

                           <div>
                              <label
                                 htmlFor="email"
                                 className="block text-sm font-medium text-gray-700 mb-1">
                                 Correo electrónico
                              </label>
                              <input
                                 id="email"
                                 type="email"
                                 placeholder="Tu correo electrónico"
                                 className="input input-sm"
                              />
                           </div>

                           <div>
                              <label
                                 htmlFor="message"
                                 className="block text-sm font-medium text-gray-700 mb-1">
                                 Mensaje
                              </label>
                              <textarea
                                 id="message"
                                 placeholder="Cuéntanos qué te interesa saber sobre esta propiedad"
                                 rows={4}
                                 className="textarea"
                              />
                           </div>

                           <div className="flex items-center">
                              <input
                                 id="terms"
                                 type="checkbox"
                                 className="checkbox checkbox-accent"
                              />
                              <label
                                 htmlFor="terms"
                                 className="ml-2 block text-sm text-gray-700">
                                 Acepto recibir información sobre esta y otras
                                 propiedades similares
                              </label>
                           </div>

                           <div className="text-center">
                              <button className="btn w-full md:w-auto bg-emerald-600 hover:bg-emerald-700">
                                 Enviar solicitud
                              </button>
                           </div>
                        </form>
                     </div>

                     <div className="bg-emerald-600 text-white p-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                           <div className="flex items-center gap-3">
                              <Calendar className="h-10 w-10" />
                              <div>
                                 <h3 className="font-semibold text-lg">
                                    Agenda una visita
                                 </h3>
                                 <p>Conoce personalmente esta propiedad</p>
                              </div>
                           </div>

                           <button className="btn bg-white text-emerald-600 hover:bg-gray-100">
                              Agendar ahora
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 flex items-end justify-center bg-gray-50">
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
                           className="bg-white p-6 rounded-lg shadow-sm">
                           <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                 <img
                                    src={`https://picsum.photos/400/40${index}`}
                                    // src={`/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(
                                    //    0,
                                    // )}`}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
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
