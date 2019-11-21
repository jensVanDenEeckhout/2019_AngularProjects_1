import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent{
	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;
	 
	constructor(){
		this.jbtHeading = 'Hello world';
		this.jbtText = 'this is simple hello world unit- styled component';
		this.jbtBtnText = 'Read More';
		this.jbtBtnUrl = 'http://jitware.be';
	}
}