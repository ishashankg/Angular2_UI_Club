import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  template: `
    <h2>Component 2</h2>
    <p>Hello World from Component 2</p>
     <p>
      <button (click)="gotoComponent1()">Back</button>
    </p>`
})
export class Component2 { 
	constructor(
		private router:Router;
	){}

	gotoComponent1(){
		this.router.navigate(['/component1']);
	}

}
