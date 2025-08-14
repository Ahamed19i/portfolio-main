import { Container, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside>
                <Container className="w-10 h-10" />
                <p className="font-bold">
                    Ahamed Hassani Mhoma
                    <span className="text-accent"></span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/ahamed19i" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.facebook.com/ahamed.hassanimhoma.3" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.instagram.com/ahamed19i/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
