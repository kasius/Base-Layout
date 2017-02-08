import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidateComponent } from './liquidate/liquidate.component';
import { LiquidationsComponent } from './liquidations/liquidations.component';
import { QuadratureComponent } from './quadrature/quadrature.component';
import { ToastrModule } from 'toastr-ng2';

import { FormsModule } from '@angular/forms';

// Pipes
import { PipeEmployeeTxt } from '../pipes/employee.pipe';
import { PipeEmployeeGroup } from '../pipes/employee.pipe';
import { PipeEmployeeState } from '../pipes/employee.pipe';


@NgModule({
    imports: [CommonModule, FormsModule,ToastrModule.forRoot()],
    declarations: [LiquidateComponent,
                   PipeEmployeeTxt, 
                   PipeEmployeeGroup, 
                   PipeEmployeeState,
                   LiquidationsComponent,
                   QuadratureComponent],
    exports: [LiquidateComponent,
              LiquidationsComponent,
              QuadratureComponent]
})
export class LiquidateModule { }
