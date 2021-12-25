import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  triggerFolder(){
    console.log('Click');
    this.active = !this.active;
  }

}
