const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('bill nye', '626', 'billbillbill@yahoo.com', 'billGit');

    expect(engineer.name).toBe('bill nye');
    expect(engineer.id).toBe('626');
    expect(engineer.email).toBe('billbillbill@yahoo.com');
    expect(engineer.github).toBe('billGit');
});

test('gets engineer github username', () => {
    const engineer = new Engineer('bill nye', '626', 'billbillbill@yahoo.com', 'billGit');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test('gets the role of engineer', () => {
    const engineer = new Engineer('bill nye', '626', 'billbillbill@yahoo.com', 'billGit');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});