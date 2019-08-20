const frisby = require('frisby');
const https = require("https");
const agent = new https.Agent(
{
	rejectUnauthorized: false
});

describe('Teste do método Get - Postman API' function()
{
	it('deve checar que o endpoint está funcional e retornando as informações corretas', funcion()
	{
		return frisby.get('https://postman-echo.com/get?foo=bar1&foo2=bar2', {agent})
		.expect('status', 200)
		.expect('json', 'args', 
		{
			foo1: 'bar1',
			foo2: 'bar2'
		});
	});
});