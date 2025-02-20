import { Injectable} from '@angular/core'
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  public projects: Project[] = [
    {
      id: 1,
      title: 'IM',
      description: 'Une application de gestion des contrats d\'assurance et des sinistres',
      imageUrl: '/images/projets/IM_accueil_backoofice.jpg',
      githubLink: '',
      demoLink: 'https://identites-mutuelle.digital/login/',
      technologies: ['Node.js', 'API Rest', 'Bootstrap']
    },
    {
      id: 2,
      title: 'Viedaura',
      description: 'Une application web pour la gestion des services d\'une société de nettoyage',
      imageUrl: '/images/projets/viedaura_accueil.jpg',
      githubLink: '',
      demoLink: 'https://viedaura.fr/login/',
      technologies: ['Node.js', 'API Rest', 'Bootstrap']
    },
    {
      id: 3,
      title: 'Recherche des restaurant MacDonals',
      description: 'Une application pour trouver des restaurants créé avec Angular.',
      imageUrl: '/images/projets/macDo.png',
      githubLink: 'https://github.com/user/portfolio-angular',
      demoLink: 'https://restaurant-theta-orpin.vercel.app/',
      technologies: ['Angular', 'TypeScript', 'Bootstrap']
    },
    {
      id: 4,
      title: 'CV Interactif',
      description: 'Mon CV interactif créé avec Angular.',
      imageUrl: '/images/projets/portfolio.png',
      githubLink: 'https://github.com/user/portfolio-angular',
      demoLink: 'https://cv-dark.vercel.app/accueil',
      technologies: ['Angular', 'TypeScript', 'Bootstrap']
    }
  ];

  constructor() {}

  // Obtenir la liste des projets
  getProjects(): Project[] {
    return this.projects;
  }

  // Obtenir un projet par son ID
  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
