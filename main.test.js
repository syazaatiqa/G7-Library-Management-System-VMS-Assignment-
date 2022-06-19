const supertest = require('supertest');
const request = supertest('http://localhost:3000');
const bcrypt = require("bcryptjs")

describe('Express Route Test', function () {
	it('register', async () => {
		return request
		.post('/register')
		.send({username: 'Melor', password: "123456" })
			.expect(200)
			.expect('Content-Type', /text/)
			.then(res => {
				expect(res.body).toBe("user created");
			});
	});

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({username: 'Melor', password: "123456" })
                .expect(200)
			    .expect('Content-Type', /text/)
                .then(res=> {
				expect(res.body).toBe("Welcome to the library portal");
			});
	});

	it('login failed', async () => {
        return request
        .post('/login')
        .send({username: 'Papoy', password: "123" })
        .expect('Content-Type', /text/)
        .expect(404).then(res => {
            expect(res.text).toBe("login success");
        });s
	});

	it('register', async () => {
        return request
        .post('/register')
        .send({username: 'Baz', password: "456" })
        .expect('Content-Type', /text/)
        .expect(404).then(res => {
            expect(res.text).toBe("Create new account");
        })
	});

	it('register failed', async () => {
        return request
        .post('/register')
        .send({username: 'Cici', password: "123456" })
        .expect('Content-Type', /text/)
        .expect(404).then(res => {
            expect(res.text).toBe("Successfully updated");
        });
    });

    it('delete successfully', async () => {
        return request
        .post('/delete')
        .send({username: 'Beto', password: "123456" })
        .expect('Content-Type', /text/)
        .expect(404).then(res => {
            expect(res.text).toBe("successfully delete");
        });
    });

    it('delete failed', async () => {
        return request
        .post('/delete')
        .send({username: 'Syaz', password: "123456" })
        .expect('Content-Type', /text/)
        .expect(404).then(res => {
            expect(res.text).toBe("delete failed");
        });
    });
});