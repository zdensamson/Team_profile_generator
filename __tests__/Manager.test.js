// const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('jim davis', '0034', 'jim.davis@gmail.com', '1');

    expect(manager.name).toBe('jim davis');
    expect(manager.id).toBe('0034');
    expect(manager.email).toBe('jim.davis@gmail.com');
    expect(manager.officeNumber).toBe('1');
});

test('gets the name of Manager', () => {
    const manager = new Manager('mike lee', '0034', 'jim.davis@gmail.com', '1');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets the role of manager', () => {
    const manager = new Manager('mike lee', '0034', 'jim.davis@gmail.com', '1');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})