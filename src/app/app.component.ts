import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit{

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateBodyClass(event.urlAfterRedirects);
    });
  }

  updateBodyClass(url: string) {
    if (url.includes('/wizard')) {
      document.body.className = 'wizard-background';
    } 
    else if(url.includes('/summary'))
    {
        document.body.className = 'summary-background';
      }
      else if(url.includes('/payment'))
      {
        document.body.className = 'payment-background';
      }
      else if(url.includes('/user'))
      {
        document.body.className = 'user-background';
      }
  }
  title = 'Apartment';
}
