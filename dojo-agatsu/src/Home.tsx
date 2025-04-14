import React from "react";
import Navbar from "./components/Navbar";
import { Phone, MapPin, CheckCircle, Dumbbell } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex justify-center">
      <div className="w-[1200px]">
        <Navbar />

        {/* Header */}
        <header className="bg-red-700 p-6 text-center">
          <h1 className="text-5xl font-bold tracking-wide">
            DOJO <span className="text-yellow-400">AGATSU</span>
          </h1>
          <p className="text-lg mt-2 uppercase text-white/80">
            La victoria sobre uno mismo
          </p>
        </header>

        {/* Hero */}
        <section
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: 'url("/dojo-hero.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="text-5xl font-extrabold text-red-500 drop-shadow-md">
              ¡CLASE DE PRUEBA GRATIS!
            </h2>
            <p className="mt-3 text-xl text-white/90 drop-shadow">
              Descubre tu potencial. Te esperamos.
            </p>
            <a href="#contacto">
              <button className="mt-6 bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
                Inscribirme
              </button>
            </a>
          </div>
        </section>

        {/* Info Principal */}
        <section className="grid grid-cols-2 gap-6 p-12">
          <div className="bg-neutral-900 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-400">¿Qué ofrecemos?</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-red-600" /> Valores y crecimiento personal
              </li>
              <li className="flex items-center gap-2">
                <Dumbbell className="text-red-600" /> Entrenamientos dinámicos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-red-600" /> Plan nutricional personalizado
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-red-600" /> Judo, Boxeo, Jiu-Jitsu, Kickboxing y MMA
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-400">Precios y Horarios</h3>
            <p className="mt-2">💸 Inscripción: <strong>$10.00</strong></p>
            <p className="mt-1">💸 Mensualidad: <strong>$30.00</strong></p>
            <div className="mt-4">
              <p>🕓 Lunes a Viernes:</p>
              <ul className="list-disc ml-6">
                <li>05:30 - 11:00</li>
                <li>15:30 - 21:00</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-red-700 text-white p-12 text-center">
          <h3 className="text-2xl font-bold">Contáctanos</h3>
          <div className="flex flex-col items-center gap-2 mt-4">
            <p className="flex items-center gap-2">
              <Phone /> 0997927074 - Profesor Lenin Jiménez
            </p>
            <p className="flex items-center gap-2 text-center">
              <MapPin /> Calles Argentina entre Bolívar y Cuadra, frente a la estatua del cuartel de la policía
            </p>
            <a href="https://wa.me/593997927074" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-md font-semibold shadow-lg transition">
                Escríbenos por WhatsApp
              </button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white text-center p-4 text-sm">
          © {new Date().getFullYear()} Dojo Agatsu. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
};

export default Home;
