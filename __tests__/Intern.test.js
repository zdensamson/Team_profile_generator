const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('zach', '420', 'zachdsamson@gmail.com', 'ASU');

    expect(intern.name).toBe('zach');
    expect(intern.id).toBe('420');
    expect(intern.email).toBe('zachdsamson@gmail.com');
    expect(intern.school).toBe('ASU');
});

test('gets school of intern', () => {
    const intern = new Intern('zach', '420', 'zachdsamson@gmail.com', 'ASU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test('gets role of intern', () => {
    const intern = new Intern('zach', '420', 'zachdsamson@gmail.com', 'ASU');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});