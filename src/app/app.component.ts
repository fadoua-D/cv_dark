import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
    title = 'cv';
    currentUrl: string = '';
  
    constructor(private router: Router) {
      this.currentUrl = window.location.pathname;
    }
  
    ngOnInit(): void {
      // On s'abonne aux événements du routeur pour mettre à jour l'URL courante
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.currentUrl = event.urlAfterRedirects;
          // Pour déboguer, vous pouvez afficher la route dans la console
          console.log('Current URL:', this.currentUrl);
        });
    }
  
    // Cette méthode détermine si le footer doit être affiché.
    shouldShowFooter(): boolean {
      // Masquer le footer uniquement sur la page d'accueil
      return !(this.currentUrl === '/' || this.currentUrl.startsWith('/accueil'));
    }
  }
