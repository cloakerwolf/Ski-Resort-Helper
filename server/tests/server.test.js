let app = require('../server.js');
let testServer = require('supertest');

describe('test the route path', () => {
    test('should respond 200 to logout ', async () => {
        // testServer(app).post('/api/user/logout').then(response => {
        //     expect(response.statusCode).toBe(200);
        // })
        let response = await testServer(app).post('/api/user/logout')
        expect(response.statusCode).toBe(200);
    })
    test('should respond 403 to not logged in req', (done) => {
        testServer(app).get('/api/user/').then(response => {
            expect(response.statusCode).toBe(403);
            done();
        })
    })
    test('/user should return user info when authenticated', async () => {
        //login
        //agent remebers cookies
        let agent = testServer.agent(app);
        const response = await agent.post('/api/user/login')
            //send data
            .send({ username: 'alex', password: '123456' })
        expect(response.statusCode).toBe(200);
        //Get to /user
        const userResponse = await agent.get('/api/user');
        expect(userResponse.statusCode).toBe(200);
    })
    // test('/hills should return a list of all of the hills when authenticated', async () => {
    //     let agent = testServer.agent(app);
    //     const response = await agent.post('/api/user/login')
    //         .send({ username: 'alex', password: '123456'})
    //         expect(response.statusCode).toBe(200);
    //         const userResponse = await agent.get('/api/hills');
    //         expect()
    // })

})