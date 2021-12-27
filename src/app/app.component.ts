import { Component } from '@angular/core';
import { StyleSelectorService } from './style-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myWebsite';

  menuActive: boolean = false;

  constructor(public styleService: StyleSelectorService){
    
  }

  triggerMenu($event: boolean){
    console.log($event);
    
    this.menuActive = $event;
  }
}
