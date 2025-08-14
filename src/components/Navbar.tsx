
import { Container } from "lucide-react";
//import { Link } from "react-router-dom"; // Pour future compatibilité avec React Router

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            
            {/* Logo du site */}
            <a href="#Home"
                className="flex items-center font-bold text-3xl md:text-xl"
            >
                <Container className="mr-2" />
                Ahamed 
                <span className="text-accent">19i</span>
            </a>

            {/* Menu */}
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost">
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#Experiences" className="btn btn-sm btn-ghost">
                        Mes expériences
                    </a>
                </li>
                <li>
                    <a href="#Projects" className="btn btn-sm btn-ghost">
                        Mes projets
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
