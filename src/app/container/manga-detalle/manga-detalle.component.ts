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
    const id = +this.route.snapshot.params['id'];
    this.mangad = this.mangaDetailService.getManga(id); 
  }
      

}
