import { Mail } from "lucide-react"
import img from '../assets/profile3.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-accent">Ahamed</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Administrateur Systèmes et Réseaux, <br />actuellement en Master 1 à l’Université
                    <strong> AFI Dakar</strong>.  
                    Passionné par la gestion des infrastructures informatiques, <br />la cybersécurité et 
                    l’optimisation des performances réseau.  
                    Mon objectif est de mettre <br /> mes compétences au service d’organisations innovantes et exigeantes.
                </p>
                <a href="mailto:contact@ahamedhassani.com?subject=Demande%20de%20contact&body=Bonjour%20Ahamed,%0AJe%20souhaite%20prendre%20contact%20avec%20vous..." 
                    className="btn btn-accent md:w-fit">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>




            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                style={{
                    borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </div>
        </div>
    )
}

export default Home
