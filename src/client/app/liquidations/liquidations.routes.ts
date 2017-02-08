import { Route } from '@angular/router';
import { LiquidateComponent } from './index';
import { LiquidationsComponent } from './index';
import { QuadratureComponent } from './index';
// import { DetailEmployeeComponent } from './index';

export const SettlementsRoutes: Route[] = [
  {
    path: 'liquidate',
    component: LiquidateComponent
  },
  {
    path: 'liquidations',
    component: LiquidationsComponent,
    // outlet: 'dashboard'
  },
  {
    path: 'quadrature',
    component: QuadratureComponent,
  }
];