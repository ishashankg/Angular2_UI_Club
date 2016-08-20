import { Routes, RouterModule } from '@angular/router';
import { Component1 }  from './component1';
import { Component2 }    from './component2';

const appRoutes: Routes = [
  { path: 'component1', component: Component1 },
  { path: 'component2', component: Component2 }
];
export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);
