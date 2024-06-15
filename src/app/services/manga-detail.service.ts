import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaDetailService {
  private mangasd = [
    {
      id: 1,
      name: 'Naruto',
      author: 'Masashi Kishimoto',
      imagen: 'https://img.asmedia.epimg.net/resizer/v2/7KOA36ZRHVAEXMHNBH6RH65HXU.jpg?auth=e5de234dfefd852cfa6e938be1b3a2d97a93a3e81030db1cc1b1845e6c2abaf5&width=644&height=362&smart=true',
      descripcion: 'La obra narra la historia de un joven ninja llamado Naruto Uzumaki, quien aspira a convertirse en el líder de su aldea, el Hokage, para así ser reconocido como alguien importante dentro de la misma.'
    },

    {
      id: 2,
      name: 'Dragon Ball',
      author: 'Akira Toriyama',
      imagen: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/11/22/14/02/3642167.jpg',
      descripcion: 'La trama sigue las aventuras de Son Goku desde su infancia hasta su edad adulta, período en el que básicamente se somete a un entrenamiento de artes marciales y explora el mundo en busca de siete objetos legendarios conocidos como las Esferas del Dragón.'
    },

  ];

  constructor() { }

  getManga(id: number) {
    return this.mangasd.find(mangad => mangad.id === id);
  }
}
