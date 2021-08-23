// const { expect, test } = require('@jest/globals');
// const exp = require('constants');
// const expectExport = require('expect');
const Employee = require('../lib/Employee');

test('creates an employee object', ()=> {
    const employee = new Employee('jim davis', '0034', 'jim.davis@gmail.com');

    expect(employee.name).toBe('jim davis');
    expect(employee.id).toBe('0034');
    expect(employee.email).toBe('jim.davis@gmail.com');
});

test('gets the name of employee', () => {
    const employee = new Employee('jim davis', '0034', 'jim.davis@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets the ID of employee', () => {
    const employee = new Employee('jim davis', '0034', 'jim.davis@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test('gets the email of employee', () => {
    const employee = new Employee('jim davis', '0034', 'jim.davis@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets the role of employee', () => {
    const employee = new Employee('jim davis', '0034', 'jim.davis@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})