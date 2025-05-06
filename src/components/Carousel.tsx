"use client";

import React, { useState, useEffect, useRef } from "react";
import {
   ChevronLeft,
   ChevronRight,
   Bed,
   Bath,
   Maximize,
   MapPin,
   Tag,
} from "lucide-react";

// Datos de ejemplo para las propiedades
const properties = [
   {
      id: 1,
      type: "venta",
      title: "Casa Moderna en Zona Residencial",
      image: "/placeholder.svg?height=600&width=800&text=Casa+Moderna",
      price: "$4,500,000",
      location: "Polanco, Ciudad de México",
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      featured: true,
   },
   {
      id: 2,
      type: "renta",
      title: "Apartamento de Lujo con Vista",
      image: "/placeholder.svg?height=600&width=800&text=Apartamento+Lujo",
      price: "$35,000/mes",
      location: "Condesa, Ciudad de México",
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      featured: false,
   },
   {
      id: 3,
      type: "venta",
      title: "Penthouse con Terraza",
      image: "/placeholder.svg?height=600&width=800&text=Penthouse",
      price: "$8,900,000",
      location: "Santa Fe, Ciudad de México",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      featured: true,
   },
   {
      id: 4,
      type: "renta",
      title: "Loft Industrial Renovado",
      image: "/placeholder.svg?height=600&width=800&text=Loft+Industrial",
      price: "$25,000/mes",
      location: "Roma Norte, Ciudad de México",
      bedrooms: 1,
      bathrooms: 1,
      area: 90,
      featured: false,
   },
   {
      id: 5,
      type: "venta",
      title: "Casa Familiar con Jardín",
      image: "/placeholder.svg?height=600&width=800&text=Casa+Familiar",
      price: "$6,200,000",
      location: "Coyoacán, Ciudad de México",
      bedrooms: 4,
      bathrooms: 3,
      area: 320,
      featured: true,
   },
   {
      id: 6,
      type: "renta",
      title: "Estudio Céntrico Amueblado",
      image: "/placeholder.svg?height=600&width=800&text=Estudio",
      price: "$15,000/mes",
      location: "Centro Histórico, Ciudad de México",
      bedrooms: 1,
      bathrooms: 1,
      area: 60,
      featured: false,
   },
];

// Componente para el badge de tipo de propiedad
const PropertyTypeBadge = ({ type }: { type: string }) => {
   const badgeClasses =
      {
         venta: "bg-emerald-500 border-emerald-600",
         renta: "bg-blue-500 border-blue-600",
         compra: "bg-amber-500 border-amber-600",
      }[type] || "bg-gray-500 border-gray-600";

   return (
      <div
         className={`absolute top-4 left-4 z-10 badge ${badgeClasses} text-white border px-3 py-2 font-medium uppercase text-xs tracking-wider transform transition-transform duration-300 hover:scale-105`}>
         {type}
      </div>
   );
};

// Componente principal del carrete de propiedades
export default function Carousel() {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
   const carouselRef = useRef<HTMLDivElement>(null);
   const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

   // Función para manejar el desplazamiento del carrusel
   const scrollToCard = (index: number) => {
      if (carouselRef.current) {
         const cardWidth = carouselRef.current.offsetWidth;
         carouselRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
         });
      }
   };

   // Función para ir a la siguiente propiedad
   const nextProperty = () => {
      const newIndex = (activeIndex + 1) % properties.length;
      setActiveIndex(newIndex);
      scrollToCard(newIndex);
   };

   // Función para ir a la propiedad anterior
   const prevProperty = () => {
      const newIndex =
         (activeIndex - 1 + properties.length) % properties.length;
      setActiveIndex(newIndex);
      scrollToCard(newIndex);
   };

   // Configurar reproducción automática
   useEffect(() => {
      if (isAutoPlaying) {
         autoPlayRef.current = setInterval(() => {
            nextProperty();
         }, 5000);
      }

      return () => {
         if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
         }
      };
   }, [isAutoPlaying, activeIndex]);

   // Pausar reproducción automática al interactuar
   const pauseAutoPlay = () => {
      setIsAutoPlaying(false);
   };

   // Reanudar reproducción automática después de un tiempo
   const resumeAutoPlay = () => {
      setTimeout(() => {
         setIsAutoPlaying(true);
      }, 10000);
   };

   return (
      <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
         <h2 className="text-3xl font-bold text-center mb-8">
            Propiedades Destacadas
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2"></div>
         </h2>

         {/* Controles del carrusel */}
         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 w-full flex justify-between px-2 md:px-6">
            <button
               onClick={() => {
                  prevProperty();
                  pauseAutoPlay();
                  resumeAutoPlay();
               }}
               className="btn btn-circle bg-base-300 backdrop-blur-sm border-none shadow-lg"
               aria-label="Propiedad anterior">
               <ChevronLeft className="h-6 w-6" />
            </button>
            <button
               onClick={() => {
                  nextProperty();
                  pauseAutoPlay();
                  resumeAutoPlay();
               }}
               className="btn btn-circle bg-base-300 backdrop-blur-sm border-none shadow-lg"
               aria-label="Siguiente propiedad">
               <ChevronRight className="h-6 w-6" />
            </button>
         </div>

         {/* Carrusel de propiedades */}
         <div
            ref={carouselRef}
            className="carousel w-full rounded-xl overflow-hidden shadow-2xl"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}>
            {properties.map((property, index) => (
               <div
                  key={property.id}
                  id={`property-${property.id}`}
                  className="carousel-item relative w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-base-300/25">
                     {/* Imagen de la propiedad */}
                     <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                           src={
                              // property.image ||
                              `https://picsum.photos/800/50${index}`
                           }
                           alt={property.title}
                           className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                        />
                        <PropertyTypeBadge type={property.type} />
                        {property.featured && (
                           <div className="absolute top-4 right-4 z-10 badge badge-secondary animate-pulse">
                              Destacado
                           </div>
                        )}
                     </div>

                     {/* Información de la propiedad */}
                     <div className="p-6 md:p-8 flex flex-col justify-between">
                        <div>
                           <h3 className="text-2xl font-bold mb-2">
                              {property.title}
                           </h3>
                           <div className="flex items-center mb-4 text-base-content/75">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span className="text-sm">
                                 {property.location}
                              </span>
                           </div>

                           <div className="flex items-center mb-6">
                              <Tag className="h-5 w-5 mr-2 text-emerald-600" />
                              <span className="text-2xl font-bold text-emerald-600">
                                 {property.price}
                              </span>
                           </div>

                           <div className="divider my-2"></div>

                           {/* Características de la propiedad */}
                           <div className="grid grid-cols-3 gap-4 mb-6">
                              <div className="flex flex-col items-center p-3 bg-base-200/25 rounded-lg transition-transform hover:scale-105 duration-300">
                                 <Bed className="h-5 w-5 text-base-content mb-1" />
                                 <span className="text-sm text-base-content/75">
                                    {property.bedrooms} Hab
                                 </span>
                              </div>
                              <div className="flex flex-col items-center p-3 bg-base-200/25 rounded-lg transition-transform hover:scale-105 duration-300">
                                 <Bath className="h-5 w-5 text-base-content mb-1" />
                                 <span className="text-sm text-base-content/75">
                                    {property.bathrooms} Baños
                                 </span>
                              </div>
                              <div className="flex flex-col items-center p-3 bg-base-200/25 rounded-lg transition-transform hover:scale-105 duration-300">
                                 <Maximize className="h-5 w-5 text-base-content mb-1" />
                                 <span className="text-sm text-base-content/75">
                                    {property.area} m²
                                 </span>
                              </div>
                           </div>
                        </div>

                        <button className="btn btn-primary w-full group overflow-hidden relative">
                           <span className="relative z-10">Ver detalles</span>
                           <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Indicadores de posición */}
         <div className="flex justify-center w-full py-4 gap-2">
            {properties.map((property, index) => (
               <button
                  key={`indicator-${property.id}`}
                  onClick={() => {
                     setActiveIndex(index);
                     scrollToCard(index);
                     pauseAutoPlay();
                     resumeAutoPlay();
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                     activeIndex === index
                        ? "bg-gradient-to-tr from-secondary/50 to-secondary w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir a propiedad ${index + 1}`}></button>
            ))}
         </div>
      </div>
   );
}
