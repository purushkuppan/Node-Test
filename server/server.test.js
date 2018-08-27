const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

describe('server', ()=> {
    describe('super', ()=> {
it('super test', (done) => {

    request(app)
        .get('/')
        .expect(200)
        .expect((res)=> {
            expect(res.body).toInclude(
                {
                    name : 'Purush',
                    age : 25
                }
            )
        })
        .end(done)
})

})
    describe('user', ()=> {
it('user test', (done) => {

    request(app)
        .get('/user')
        .expect(200)
        .expect((res)=> {
            expect(res.body).toInclude(
                {
                    name : 'Purush',
                    age : 30
                }
            )
        })
        .end(done)
})
})
})