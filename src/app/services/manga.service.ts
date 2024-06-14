import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  mangas = [
    {id: 1,name: 'One Piece', author: 'Eiichiro Oda', genre: 'Shonen', status: 'Emision', imagen: 'https://elcomercio.pe/resizer/AB93Kg1JoITGLMLkCgLBnVzg_7g=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/37OWRM2CLBAE7BP5SXKLVMNHZE.jpg'},
    {id: 2,name: 'Dragon Ball', author: 'Akira Toriyama', genre: 'Shonen', status: 'Emision', imagen: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/11/22/14/02/3642167.jpg'},
    {id: 3,name: 'Naruto', author: 'Masashi Kishimoto', genre: 'Shonen', status: 'Finalizado', imagen: 'https://i.pinimg.com/564x/d8/e3/04/d8e3040372030c633df7f7ee5034dfef.jpg'},
    {id: 4,name: 'Bleach', author: 'Tite Kubo', genre: 'Shonen', status: 'Finalizado', imagen: 'https://i.pinimg.com/564x/d1/f6/ba/d1f6ba8555f629dbb03db0f610b760c6.jpg'},

  ]

  constructor() { }

  getMangas() {
    return this.mangas
  }
}
