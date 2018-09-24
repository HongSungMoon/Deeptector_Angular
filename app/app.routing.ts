import { Routes, RouterModule } from '@angular/router';
import { listComponent } from './app.listcomponent';
import { mainComponent } from './app.maincomponent';
import { cctvComponent } from './app.cctv';
import { productComponent } from './app.product';

const routes : Routes = [
	{ path : 'viewCCTV', component : cctvComponent },
    { path : 'list', component : listComponent },
    { path : '', component : productComponent }
];
export const routing = RouterModule.forRoot(routes);