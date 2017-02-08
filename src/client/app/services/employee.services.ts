import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// Services
import { ApiResource } from './api.services';

//Model
import { EmployeeModel } from '../models/employee.model';

//Mocks
import { EMPLOYEES } from '../mocks/mock-employee';


@Injectable()
export class EmployeeService {

    hostRRHH: string;

    constructor(private http: Http, private _api: ApiResource) {
        this.hostRRHH = _api.apiOrbis;
    }
    getUsers(): Promise<EmployeeModel[]> {
        console.log("API");
        // console.log(this.hostRRHH);
        return Promise.resolve(EMPLOYEES);
        // var authHeader = new Headers();
        // return this.http.get(this.hostRRHH + 'GeyserUsers', {
        //     headers: authHeader
        // })
        //     .map(res => res.json());
    }
}