import { Component, OnInit } from '@angular/core';
import { MangaBody } from './mangabody.model';
import { MangaService } from '../../services/manga.service';


@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css',

})
export class MangaComponent implements OnInit {
  mangas: MangaBody[] = [];

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.mangas = this.mangaService.getMangas();
  }
}