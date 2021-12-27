import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleSelectorService {

  public colors: string = "dark";
  public theme: string = "side-menu"

  constructor() {
  }

  setStyle(style: string){
    this.colors = style;
    console.log("Cambiato tema");
    
  }
}
