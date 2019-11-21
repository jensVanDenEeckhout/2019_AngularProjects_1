import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';


const routes: RouterConfig = [
	{path:'', component:HomeComponent},
	{path:'about', component:AboutComponent}
];

export const appRouterProviders = [ 
	provideRouter(routes)
]; 