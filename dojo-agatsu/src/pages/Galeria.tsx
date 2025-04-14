import React, { useState } from "react";
import Navbar from "../components/Navbar";

type MediaType = "image" | "video" | "youtube";

interface MediaItem {
  type: MediaType;
  src: string;
}

const Galeria: React.FC = () => {
  const items: MediaItem[] = [
    { type: "image", src: "/galeria1.jpg" },
    { type: "image", src: "/galeria2.jpg" },
    { type: "video", src: "/videos/emily.mp4" },
    { type: "youtube", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { type: "image", src: "/galeria3.jpg" },
    { type: "video", src: "/videos/entrenamiento.mp4" },
  ];

  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<MediaType | "all">("all");

  const filteredItems = filter === "all" ? items : items.filter((item) => item.type === filter);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex justify-center">
      <div className="w-[1200px]">
        <Navbar />

        <header className="text-center py-10">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">Galería</h1>
          <p className="text-white/80 text-lg mb-6">
            Un vistazo a nuestras clases, entrenamientos y comunidad.
          </p>

          {/* Filtros */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {["all", "image", "video", "youtube"].map((tipo) => (
              <button
                key={tipo}
                onClick={() => setFilter(tipo as MediaType | "all")}
                className={`px-4 py-2 rounded-md border font-medium transition ${
                  filter === tipo
                    ? "bg-yellow-400 text-black"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
              >
                {tipo === "all"
                  ? "Todos"
                  : tipo === "image"
                  ? "Imágenes"
                  : tipo === "video"
                  ? "Videos"
                  : "YouTube"}
              </button>
            ))}
          </div>
        </header>

        {/* Galería */}
        <div className="grid grid-cols-3 gap-6 px-12 pb-12">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => item.type === "image" && setSelected(item)}
              className={`group overflow-hidden rounded-lg shadow-lg ${
                item.type === "image" ? "cursor-pointer" : ""
              }`}
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              {item.type === "video" && (
                <video
                  src={item.src}
                  controls
                  className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              )}
              {item.type === "youtube" && (
                <div className="aspect-[16/9] bg-black">
                  <iframe
                    src={item.src}
                    className="w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                    title={`YouTube ${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox solo para imágenes */}
        {selected?.type === "image" && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden shadow-lg">
              <img src={selected.src} alt="Vista ampliada" className="w-full h-auto" />
            </div>
          </div>
        )}

        <footer className="bg-black text-white text-center p-4 text-sm">
          © {new Date().getFullYear()} Dojo Agatsu. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
};

export default Galeria;
