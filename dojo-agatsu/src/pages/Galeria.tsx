import { useState } from "react";
import styles from "./Galeria.module.css";

type MediaType = "image" | "video";

interface MediaItem {
  type: MediaType;
  src: string;
  alt?: string;
}

const items: MediaItem[] = [
  { type: "image", src: "/galeria1.jpg", alt: "Entrenamiento 1" },
  { type: "image", src: "/galeria2.jpg", alt: "Entrenamiento 2" },
  { type: "video", src: "/videos/emily.mp4" },
  { type: "image", src: "/darla.jpg", alt: "Entrenamiento 3" },
  { type: "video", src: "/videos/entrenamiento.mp4" },
];

const Galeria = () => {
  const [filter, setFilter] = useState<MediaType | "all">("all");

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.type === filter);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Galería</h2>
      <div className={styles.filters}>
        {["all", "image", "video"].map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFilter(tipo as MediaType | "all")}
            className={`${styles.filterBtn} ${
              filter === tipo ? styles.active : ""
            }`}
          >
            {tipo === "all"
              ? "Todos"
              : tipo === "image"
              ? "Imágenes"
              : "Videos"}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredItems.map((item, idx) => (
          <div key={idx} className={styles.card}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || `Imagen ${idx + 1}`}
                className={styles.media}
              />
            ) : (
              <video
                src={item.src}
                controls
                className={styles.media}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
