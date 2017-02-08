import { EmployeeModel } from '../models/employee.model';

export const EMPLOYEES: EmployeeModel[] = [
  {employeeid: '123', liquidate: true, name: 'carlos',lastname: 'Cifuentes', cargo: 'Desarrollador', state: 'Activo', group:[1,2], rut: '17.220.899-1', selected: false},
  {employeeid: '222', liquidate: false, name: 'pedro',lastname: 'Galvez', cargo: 'Desarrollador', state: 'Activo' , group:[1,2], rut: '14.220.899-1', selected: false},
  {employeeid: '333', liquidate: true, name: 'patricia',lastname: 'Contreras', cargo: 'Jefe Proyecto', state: 'Activo', group:[1,3], rut: '7.320.899-1', selected: false},
  {employeeid: '444', liquidate: false, name: 'juan ',lastname: 'Pedreros', cargo: 'Tester', state: 'Activo', group:[1,3], rut: '11.110.732-1', selected: false},
  {employeeid: '555', liquidate: true, name: 'osvaldo',lastname: 'Torres', cargo: 'Desarrollador', state: 'Inactivo', group:[1,2], rut: '9.333.666-0', selected: false},
  {employeeid: '666', liquidate: false, name: 'marisol',lastname: 'Gutierrez', cargo: 'Analista', state: 'Activo', group:[1,3], rut: '15.847.232-k', selected: false},
  {employeeid: '777', liquidate: false, name: 'maria',lastname: 'Muñoz', cargo: 'Gerente General', state: 'Activo', group:[1,3], rut: '18.323.546-k', selected: false},
];
