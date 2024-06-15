import { Component, OnInit} from '@angular/core';
import { MangaDetailService } from '../../services/manga-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Manga } from '../manga-detalle/manga.model';

@Component({
  selector: 'app-manga-detalle',
  standalone: true,
  imports: [],
  templateUrl: './manga-detalle.component.html',
  styleUrl: './manga-detalle.component.css'
})
export class MangaDetalleComponent  implements OnInit{
  mangad: Manga | undefined;

  constructor(
    private route: ActivatedRoute,
    private mangaDetailService: MangaDetailService
  ) { }

  ngOnInit(): void {
    this.mangad = this.mangaDetailService.getManga(1); // Reemplaza 1 con el ID del manga que quieres mostrar
  }
      

}
