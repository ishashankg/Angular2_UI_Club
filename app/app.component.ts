import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <nav>
      <a routerLink="/component1" routerLinkActive="active">Component 1</a>
      <a routerLink="/component2" routerLinkActive="active">Component 2</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
