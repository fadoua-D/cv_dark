export interface Project {
    id: number; // Identifiant unique
    title: string; // Titre du projet
    description: string; // Brève description du projet
    imageUrl: string; // URL de l'image du projet
    githubLink?: string; // Lien vers le dépôt GitHub (optionnel)
    demoLink?: string; // Lien vers la démo en ligne (optionnel)
    technologies: string[]; // Liste des technologies utilisées
  }
  