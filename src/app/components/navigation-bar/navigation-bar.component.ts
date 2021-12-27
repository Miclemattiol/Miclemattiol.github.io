import { Component, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StyleSelectorService } from 'src/app/style-selector.service';
import { environment } from 'src/environments/environment';

interface Page{
  name: string,
  href: string,
  icon: string,
  active?: boolean
}

interface Theme{
  name: string,
  icon: string,
  selector: string
}

interface ColorPalette{
  name: string,
  icon: string
  selector: string
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent{
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

  colors: ColorPalette[] = environment.colors;


  @Output() menuTriggerEmitter = new EventEmitter<boolean>();

  pageTitle: String = 'Placeholder'

  menuActive: boolean = false;

  constructor(public router: Router, public styleService: StyleSelectorService) { 
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

  triggerMenu(){
    this.menuActive = !this.menuActive;
    this.menuTriggerEmitter.emit(this.menuActive);
    console.log("emitted");
  }

  switchTheme(color: ColorPalette){
    this.styleService.colors = color.selector;
  }
}

