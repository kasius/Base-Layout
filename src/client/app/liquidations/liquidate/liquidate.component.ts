import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servies
import { EmployeeService } from '../../services/employee.services';
import { LiquidateService } from '../../services/liquidate.services';
import { ToastrService } from 'toastr-ng2';

// Models
import { EmployeeModel } from '../../models/employee.model';

/**
 * This class represents the lazy loaded LiquidateComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-liquidate',
  templateUrl: 'liquidate.component.html'
  //   entryComponents: []
})
export class LiquidateComponent implements OnInit {

  employees: EmployeeModel[] = [];
  filterTextEmployee: string;
  filterEmployeeGrp: number = 1;
  filterEmployeeStt: string;

  constructor(private _route: Router,
    private _employeeService: EmployeeService,
    private _liquidateService: LiquidateService,
    private _toastrService: ToastrService
  ) {

  }

  ngOnInit(): void {
    this._employeeService.getUsers()
      .then(employees => this.employees = employees);
  }

  liquidateSelected() {
    var list = [];
    for (var employee of this.employees) {
      if (employee.selected == true) {
        list.push(employee);
      }
    }

    this._liquidateService.calculateSalary(list).subscribe(
      // response => this.response = response, 
      error => console.error('Error: '),
      // () => this._route.navigate(['/'])
    );

    this._toastrService.success('Liquidaciones Generadas', 'ÉXITO!');
  }

  reLiquidateSelected() {
    var list = [];
    for (var employee of this.employees) {
      if (employee.selected == true) {
        list.push(employee);
      }
    }

    this._liquidateService.calculateSalary(list).subscribe(
      // response => this.response = response, 
      error => console.error('Error: '),
      // () => this._route.navigate(['/'])
    );

    this._toastrService.warning('Liquidaciones Generadas', 'ÉXITO!');
  }
}
