import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',


})
export class BodyComponent implements OnInit {
  mangas: { id: number; name: string; author: string; genre: string; status: string; imagen: string; }[] = [];


  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.mangas = this.mangaService.getMangas();
  }

}