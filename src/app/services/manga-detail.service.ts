import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaDetailService {
  private mangasd = [
    {
      id: 1,
      name: 'One Piece',
      author: 'Eiichiro Oda',
      imagen: 'https://i.blogs.es/913293/c0pujiakubq5rwas/1366_2000.webp',
      descripcion: 'La historia sigue a Monkey D. Luffy, un joven cuyo cuerpo adquiere las propiedades de la goma después de haber comido una fruta del diablo conocida como la fruta Gomu Gomu, una de las frutas del diablo más poderosas que existen en el mundo de One Piece. Luffy, después de ser salvado por un pirata llamado Shanks, decide convertirse en el Rey de los Piratas y busca el tesoro conocido como el One Piece para lograrlo. Para ello, Luffy reúne a una tripulación y viaja por el mundo en busca del tesoro mientras se enfrenta a otros piratas y a la Marine.'
    },

    {
      id: 2,
      name: 'Dragon Ball',
      author: 'Akira Toriyama',
      imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKDOr8kiTS5iMDb9vedwGDQnViPXFeXePZx4_Ll6Eh236Fl2UmiaCt6mM5IWj_tuevHRJCSTwvmfRJ61ltmNkJf85YCQMDWumXRtp6A5MI_IqIm5emoZv53AU8tKfnye29pfGABSXDudI/s650/Episodios-Dragon-Ball-Sin-Relleno-Orden-Cronologico.jpg',
      descripcion: 'La trama sigue las aventuras de Son Goku desde su infancia hasta su edad adulta, período en el que básicamente se somete a un entrenamiento de artes marciales y explora el mundo en busca de siete objetos legendarios conocidos como las Esferas del Dragón.'
    },

    {
      id: 3,
      name: 'Naruto',
      author: 'Masashi Kishimoto',
      imagen: 'https://img.asmedia.epimg.net/resizer/v2/7KOA36ZRHVAEXMHNBH6RH65HXU.jpg?auth=e5de234dfefd852cfa6e938be1b3a2d97a93a3e81030db1cc1b1845e6c2abaf5&width=644&height=362&smart=true',
      descripcion: 'La obra narra la historia de un joven ninja llamado Naruto Uzumaki, quien aspira a convertirse en el líder de su aldea, el Hokage, para así ser reconocido como alguien importante dentro de la misma.'
    },

  ];

  constructor() { }

  getManga(id: number) {
    return this.mangasd.find(mangad => mangad.id === id);
  }
}
