
import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ ContainerModule, RouterOutlet, RouterLink],

})
export class AppComponent {
  title = 'MangaNexus';
}

