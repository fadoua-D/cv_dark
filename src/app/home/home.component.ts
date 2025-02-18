import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'Fadoua Derouich';
  title = 'Développeur Full-Stack';
  description = 'Passionné par le développement web et mobile, spécialisé en PHP et Node.js.';
  skills = ['PHP', 'Symfony', 'Angular', 'TypeScript', 'Node.js', 'Bootstrap', 'MongoDB'];

  downloadCV() {
    const cvUrl = '/images/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_fadoua_derouich.pdf'; // Nom du fichier lors du téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

}
