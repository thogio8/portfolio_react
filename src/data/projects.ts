import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Clone Geometry Dash",
    description: "Création d'un clone de Geometry Dash en utilisant Java et JavaFX.",
    technologies: ["Java", "JavaFX", "PlantUML"],
    imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg?t=1703006148",
  },
  {
    title: "Clone Indeed",
    description: "Création d'une application web de recherche d'emploi en utilisant React pour le frontend et Symfony pour le backend (API).",
    technologies: ["React", "Vite", "Material UI", "Symfony", "Doctrine", "MySQL"],
    imageUrl: "https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/indeed-share-image-9581a8.png",
    githubUrl: "https://github.com/Bastctt/JobQuest.v.1.0.0/tree/main"
  },
  {
    title: "Portfolio",
    description: "Création de mon portfolio personnel en utilisant React et Tailwind CSS.",
    technologies: ["React", "Tailwind", "Vite", "TypeScript"],
    imageUrl: "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2021-03-18-portfolio-design-graphique.jpg",
    githubUrl: "https://github.com/thogio8/portfolio_react"
  }
];