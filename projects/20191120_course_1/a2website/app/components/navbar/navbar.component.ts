import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'navbar',
	templateUrl: 'navbar.component.html'
	directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent{
	private projectName2:string;
	private projectName3:string;


	constructor(){
		this.projectName2 = 'A2websitePropgggg';
		this.projectName3 = 'Jitware';
	}
}