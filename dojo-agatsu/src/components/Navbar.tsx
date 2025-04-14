import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Dojo Agatsu</div>
      <div className={styles.links}>
        <Link to="/">Inicio</Link>
        <Link to="/galeria">Galería</Link>
      </div>
    </nav>
  );
};

export default Navbar;
