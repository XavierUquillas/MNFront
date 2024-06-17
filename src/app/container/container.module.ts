import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { MangaComponent } from './manga/manga.component';
import { RouterLink, provideRouter } from '@angular/router';
import { routes } from '../app.routes';



@NgModule({
  declarations: [
    ContainerComponent,
    NavbarComponent,
    BodyComponent,
    MangaComponent,
  ],
  exports: [ContainerComponent,NavbarComponent,BodyComponent,MangaComponent],
  imports: [ CommonModule, RouterLink ],
  providers:[provideRouter(routes)]
})
export class ContainerModule { }
