import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// Services
import { ApiResource } from './api.services';

// //Model
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class LiquidateService {
    hostRRHH: string;

    constructor(private http: Http, private _api: ApiResource) {
        this.hostRRHH = _api.apiOrbis;
    }

    calculateSalary(employees: EmployeeModel[]) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var obj =
            {
                "periodo": "201701",
                "empresa": -1,
                "ids": ""
            };
        let body = JSON.stringify(obj);
        this.hostRRHH;
        return this.http.post(this.hostRRHH + 'rrhh/service/liquidacion/generartodos', body, { headers: headers })
            .map(response => response.json());
    }
}