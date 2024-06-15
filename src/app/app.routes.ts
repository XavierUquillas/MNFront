import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { RegistroComponent } from './registro/registro.component';
import { MangaDetalleComponent } from './container/manga-detalle/manga-detalle.component';

export const routes: Routes = [
    {path: 'mangad/:id', component: MangaDetalleComponent},
    {path: 'container', component: ContainerComponent},
    {path: 'register', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'container', pathMatch: 'full'}
];