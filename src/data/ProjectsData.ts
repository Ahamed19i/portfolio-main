

// src/data/ProjectsData.tsx
import img1 from '../assets/projects/p1.webp';
import img2 from '../assets/projects/p2.webp';
import img3 from '../assets/projects/p3.webp';
import img4 from '../assets/projects/p4.webp';
import img5 from '../assets/projects/p5.webp';
import img6 from '../assets/projects/p6.webp';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Infrastructure Réseau Sécurisée pour PME',
    description: `La conception et le déploiement d’un réseau d’entreprise nécessitent une planification minutieuse afin d’assurer la sécurité et la haute disponibilité. Pour ce projet, nous avons segmenté le réseau en plusieurs VLAN pour isoler les services critiques des utilisateurs standard. Chaque VLAN est configuré sur des switches Cisco et des routeurs appropriés pour garantir une communication efficace entre les départements. Un pare-feu PfSense a été mis en place pour filtrer le trafic entrant et sortant, tout en permettant les services autorisés. La redondance des liens et l’équilibrage de charge ont été intégrés pour éviter toute interruption des services. Des tests de vulnérabilité ont été réalisés pour identifier les points faibles du réseau et les corriger. Enfin, la documentation complète a été fournie pour assurer la maintenance et la montée en compétence de l’équipe IT interne.`,
    technologies: ['Cisco IOS', 'PfSense', 'Windows Server'],
    demoLink: '#',
    repoLink: '#',
    image: img1,
  },
  {
    id: 2,
    title: 'Virtualisation et Gestion des Services',
    description: `Ce projet consistait à créer un environnement virtualisé pour héberger les applications critiques de l’entreprise. Nous avons utilisé VMware ESXi et Hyper-V pour déployer plusieurs serveurs virtuels sur un même matériel physique. Chaque machine virtuelle a été configurée avec des snapshots réguliers pour assurer la restauration rapide en cas de problème. La migration à chaud a été testée pour minimiser les interruptions lors de la maintenance. Des stratégies de haute disponibilité ont été mises en place afin que les services restent accessibles en permanence. L’orchestration et le monitoring des ressources ont été configurés pour optimiser les performances. Des procédures de sauvegarde et de récupération ont été documentées pour sécuriser les données sensibles.`,
    technologies: ['VMware ESXi', 'Hyper-V', 'Windows Server'],
    demoLink: '#',
    repoLink: '#',
    image: img2,
  },
  {
    id: 3,
    title: 'Plateforme de Messagerie et Collaboration',
    description: `Nous avons mis en place un serveur Exchange complet pour gérer les emails, calendriers et contacts de l’entreprise. Chaque utilisateur a reçu une boîte aux lettres sécurisée avec accès via Outlook Web Access et mobile. Les permissions et les groupes de distribution ont été configurés pour faciliter la communication interne. Les calendriers partagés ont été paramétrés pour organiser les réunions et événements professionnels. L’Active Directory a été intégré pour centraliser l’authentification et la gestion des comptes utilisateurs. Des politiques de sécurité ont été appliquées pour limiter les risques d’intrusion et protéger les données. Enfin, un guide utilisateur a été fourni pour faciliter l’adoption de la plateforme par l’équipe.`,
    technologies: ['Windows Server', 'Microsoft Exchange', 'Active Directory'],
    demoLink: '#',
    repoLink: '#',
    image: img3,
  },
  {
    id: 4,
    title: 'Automatisation des Tâches Systèmes',
    description: `L’automatisation des tâches administratives a permis de gagner du temps et de réduire les erreurs humaines. Des scripts PowerShell et Bash ont été créés pour déployer des applications sur plusieurs machines simultanément. Les sauvegardes des serveurs et des bases de données ont été automatisées pour garantir la sécurité des données. La surveillance des performances système a été mise en place avec des alertes en cas d’anomalies. Les rapports d’activité ont été générés automatiquement pour fournir une vue d’ensemble de l’infrastructure. Les scripts ont été testés dans un environnement sandbox avant le déploiement réel. La documentation et les commentaires dans le code facilitent la maintenance future.`,
    technologies: ['PowerShell', 'Bash', 'Linux'],
    demoLink: '#',
    repoLink: '#',
    image: img4,
  },
  {
    id: 5,
    title: 'Déploiement de Conteneurs et Microservices',
    description: `Pour ce projet, nous avons adopté Docker pour déployer des applications en conteneurs, assurant ainsi portabilité et isolation. Chaque service a été empaqueté avec ses dépendances pour garantir un fonctionnement identique sur tous les environnements. Le réseau Docker a été configuré pour permettre la communication sécurisée entre les conteneurs. Les images ont été optimisées pour réduire la taille et améliorer les temps de démarrage. Des stratégies de mise à jour continue ont été mises en place pour déployer rapidement les nouvelles versions des services. La surveillance et le logging des conteneurs ont été intégrés pour faciliter le debug. Enfin, une documentation complète a été créée pour la reprise et l’extension du projet.`,
    technologies: ['Docker', 'Linux', 'Nginx'],
    demoLink: '#',
    repoLink: '#',
    image: img5,
  },
  {
    id: 6,
    title: 'Surveillance et Supervision Réseau',
    description: `Ce projet avait pour objectif de surveiller l’état des serveurs et des équipements réseau en temps réel. Nous avons installé Zabbix pour collecter les métriques des serveurs, switches et routeurs. Les alertes ont été configurées pour prévenir immédiatement en cas de panne ou de surcharge. Les tableaux de bord ont été créés pour visualiser facilement l’état de l’infrastructure. Des scripts personnalisés ont été développés pour automatiser certaines interventions en cas de problème. Les journaux et historiques ont été analysés pour anticiper les incidents. La solution a permis d’améliorer la disponibilité et la sécurité globale du réseau.`,
    technologies: ['Zabbix', 'SNMP', 'Linux'],
    demoLink: '#',
    repoLink: '#',
    image: img6,
  },
];
