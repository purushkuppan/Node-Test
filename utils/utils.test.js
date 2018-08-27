const expect = require('expect')
const utils = require('./utils')

describe('utils', ()=> {


describe('Add', ()=> {


it('Add test case', () =>{
    var res = utils.add(12,8)
    expect(res).toBe(20).toBeA('number')

})
})
describe('Minus', ()=> {

it(' test case', () =>{
    var res = utils.minus(12, 8)
    expect(res).toBe(4).toBeA('number')
})
})

describe('Divide', ()=> {


it('Divide test case', () =>{
    var res = utils.divide(80, 8)
    expect(res).toBe(10).toBeA('number')
})
})

describe('Async add', ()=> {



it('Async add test case', (done) =>{
    utils.asyncCall(10,20, (sum) => {
        expect(sum).toBe(30).toBeA('number')
        done()
    })
})
})

describe('Minus', ()=> {


it('Minus sync test', (done) =>{
    utils.minusAsync(20,10, (remain) => {
        expect(remain).toBe(10).toBeA('number');
        done();
    })
})
})
describe('Async', ()=> {

it('Async Square test case', (done) =>{
    utils.squareAsyncCall(10, (square) => {
        expect(square).toBe(100).toBeA('number')
        done()
    })
})
})

describe('object', ()=> {
it('object test case', () =>{
    var user = {};
    var res = utils.userObj(user, "Purush Kuppan")
    expect(res).toInclude({
        fName: 'Purush',
        lName: 'Kuppan'
    }).toBeA('object')
})
})
})
/*
it('Divide test case', () =>{
    expect(10).toNotBe(12).toBeA('number')
    expect({
        name: 'purush'
    }).toExclude({
        name: 'purush1'
    }).toBeA('object')
})*/
