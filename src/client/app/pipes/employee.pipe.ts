import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';

// Models
import { EmployeeModel } from '../models/employee.model';

@Pipe({
    name: 'group',
    pure: false
})
@Injectable()
export class PipeEmployeeTxt implements PipeTransform {
    transform(items: any[], args: any[]) {
        return items.filter(item => item.group.indexOf(args) !== -1);
    }
}

@Pipe({
    name: 'text',
    pure: false
})
@Injectable()
export class PipeEmployeeGroup implements PipeTransform {
    transform(items: any[], args: any) {
        var list = [];
        if (args !== undefined) {
            for (var item of items) {
                var name = item.name;
                var rut = item.rut;
                if((name.indexOf(args) != -1) || (rut.indexOf(args) != -1)){
                    list.push(item);
                }
            }
            return list;
        } else {
            return items.filter(item => item.name.indexOf(args));
        }
    }
}

@Pipe({
    name: 'state',
    pure: false
})
@Injectable()
export class PipeEmployeeState implements PipeTransform {
    transform(items: any[], args: string) {
        return items.filter(item => {
            console.log(args);
            item.state.indexOf(args) !== -1
        });
    }
}