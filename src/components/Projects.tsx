
import Title from "./Title";
import { Link } from "react-router-dom"; // 🔹 Import Link pour navigation

import img1 from '../assets/projects/p1.webp';
import img2 from '../assets/projects/p2.webp';
import img3 from '../assets/projects/p3.webp';
import img4 from '../assets/projects/p4.webp';
import img5 from '../assets/projects/p5.webp';
import img6 from '../assets/projects/p6.webp';

export const projects = [
    {
        id: 1,
        title: 'Infrastructure Réseau Sécurisée pour PME',
        description: 'Conception et déploiement d’un réseau d’entreprise complet avec segmentation VLAN, configuration de routeurs/switches Cisco et mise en place d’un pare-feu pour assurer la sécurité et la haute disponibilité.',
        technologies: ['Cisco IOS', 'PfSense', 'Windows Server'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Virtualisation et Gestion des Services',
        description: 'Mise en place d’un environnement virtualisé avec VMware et Hyper-V pour héberger serveurs et applications critiques, incluant la configuration de snapshots, migration à chaud et haute disponibilité.',
        technologies: ['VMware ESXi', 'Hyper-V', 'Windows Server'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Plateforme de Messagerie et Collaboration',
        description: 'Installation et configuration d’un serveur Exchange complet avec gestion des boîtes aux lettres, calendriers partagés et accès sécurisé via Outlook Web Access.',
        technologies: ['Windows Server', 'Microsoft Exchange', 'Active Directory'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Automatisation des Tâches Systèmes',
        description: 'Création de scripts PowerShell et Bash pour l’automatisation des sauvegardes, le déploiement d’applications et la surveillance des performances système.',
        technologies: ['PowerShell', 'Bash', 'Linux'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Déploiement de Conteneurs et Microservices',
        description: 'Configuration et orchestration de conteneurs Docker pour héberger des applications internes, avec mise en place d’un réseau Docker et optimisation des images.',
        technologies: ['Docker', 'Linux', 'Nginx'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Surveillance et Supervision Réseau',
        description: 'Implémentation d’une solution de monitoring avec Zabbix pour surveiller l’état des serveurs, des équipements réseau et générer des alertes proactives.',
        technologies: ['Zabbix', 'SNMP', 'Linux'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Link
                        to={`/project/${project.id}`} // 🔹 Route vers la page détail
                        key={project.id}
                        className="block bg-base-300 p-5 h-fit rounded-xl shadow-lg hover:shadow-xl transition"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">{project.title}</h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="badge badge-accent badge-sm">{tech}</span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
