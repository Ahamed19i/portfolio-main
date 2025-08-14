import Title from "./Title"

import imgCSS from "../assets/techno/linux1.png";
import imgJS from "../assets/techno/docker1.png";
import imgREACT from "../assets/techno/exchange1.jpg";
import imgHTML from "../assets/techno/Windows-Server-2022.png";

import imgNODE from "../assets/techno/node-js.png";

import imgTAILWIND from "../assets/techno/django.jpeg";


import google from "../assets/companies/328-3285590_simple-mobile-logo-telecommunications-logonoidcom-tunisie-telecom-logo.png";
import meta from "../assets/companies/sonatel.png";
import amazon from "../assets/companies/perso.webp";



const skills = [
    { id: 1, name: "Windows server", image: imgHTML },
    { id: 2, name: "Linux server", image: imgCSS },
    { id: 3, name: "Docker", image: imgJS },
    { id: 4, name: "Exchange", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Django", image: imgTAILWIND },
];


const experiences = [
    {
        id: 1,
        role: "Administrateur Réseaux",
        company: "Tunisie Telecom",
        period: "Août 2022 - Janvier 2023",
        description: [
            "Gestion et supervision des infrastructures réseau pour assurer une connectivité optimale.",
            "Mise en place et maintenance de solutions de routage, switching et sécurité avancée.",
            "Optimisation des performances réseau et résolution proactive des incidents techniques."
        ],
        image: google, // Remplacer l'image plus tard
    },
    {
        id: 2,
        role: "Administrateur Systèmes",
        company: "SONATEL",
        period: "Juin 2024 - Janvier 2025",
        description: [
            "Administration avancée de serveurs Windows et Linux pour environnements critiques.",
            "Mise en place de solutions de virtualisation (VMware, Hyper-V) et gestion d’images système.",
            "Déploiement et gestion de conteneurs Docker pour optimiser les processus de développement.",
            "Renforcement de la sécurité et automatisation des tâches via scripts et outils spécialisés."
        ],
        image: meta, // Remplacer l'image plus tard
    },
    {
        id: 3,
        role: "Projet Personnel – Développeur Fullstack & Administrateur Systèmes",
        company: "Projet Universitaire",
        period: "En cours",
        description: [
            "Conception et développement complet d’une plateforme de gestion universitaire avec Django et React.",
            "Intégration d’un système de messagerie et calendrier via Microsoft Exchange Server sous Windows Server.",
            "Configuration réseau et sécurité pour un environnement de production fiable et scalable."
        ],
        image: amazon, // Remplacer l'image plus tard
    },
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
