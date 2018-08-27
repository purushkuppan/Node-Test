const expect =require('expect');

describe('spy', ()=> {

    it(' spy case', () =>{
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    })
})