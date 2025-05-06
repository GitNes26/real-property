import React from "react";
import env from "../constants/env";
import ThemeChanger from "../components/ThemeChanger";
import { Home } from "lucide-react";

const Header = ({}) => {
   return (
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 flex items-center justify-center">
         <div className="container flex h-16 items-center justify-between max-w-[90%]">
            <div className="flex items-center gap-2">
               <Home className="h-6 w-6 text-emerald-600" />
               <span className="text-xl font-bold">{env.bussinessName}</span>
            </div>

            <nav className="hidden gap-6">
               {/* <nav className="hidden md:flex gap-6"> */}
               <a
                  href="#property"
                  className="text-sm font-medium hover:text-emerald-600 transition-colors">
                  Propiedad
               </a>
               <a
                  href="#features"
                  className="text-sm font-medium hover:text-emerald-600 transition-colors">
                  Características
               </a>
               <a
                  href="#gallery"
                  className="text-sm font-medium hover:text-emerald-600 transition-colors">
                  Galería
               </a>
               <a
                  href="#agent"
                  className="text-sm font-medium hover:text-emerald-600 transition-colors">
                  Agente
               </a>
               <a
                  href="#contact"
                  className="text-sm font-medium hover:text-emerald-600 transition-colors">
                  Contacto
               </a>
            </nav>

            <div className="gap-2 hidden md:inline-flex">
               <button className="btn  bg-emerald-600 hover:bg-emerald-700">
                  Agendar visita
               </button>
               <ThemeChanger />
            </div>

            <button
               // variant="outline"
               // size="icon"
               className="btn btn-outline md:hidden">
               <span className="sr-only">Toggle menu</span>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
               </svg>
            </button>
         </div>
      </header>
   );
};

export default Header;
