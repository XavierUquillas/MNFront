import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent {
  @Input() manga: any;
  
  constructor() { }
}
