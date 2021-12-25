import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface Page{
  name: string,
  href: string,
  icon: string,
  active?: boolean
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, AfterViewInit{
  pages: Page[] = [
    {
      name: 'Home',
      href: '/home',
      icon: 'bi-house-door'
    },
    {
      name: 'Chi sono',
      href: '/chi_sono',
      icon: 'bi-person'
    },
    {
      name: 'Le mie esperienze',
      href: '/le_mie_esperienze',
      icon: 'bi-briefcase'
    }
  ];

  pageTitle: String = 'Placeholder'

  constructor(public router: Router) { 
    router.events.subscribe(event => {
      console.log(event);
      if(event instanceof NavigationEnd){
        console.log(`Looking for ${event.urlAfterRedirects.split('/')[1]}`);
        
        let p = this.pages.find( p => { 
          return event.urlAfterRedirects.includes(p.href);
        });

        console.log(p);
        if(p){
          console.log('found');
          this.pageTitle = p.name;
          this.pages.forEach(p => p.active = false);
          p.active = true;
        }
      }
    })
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}

