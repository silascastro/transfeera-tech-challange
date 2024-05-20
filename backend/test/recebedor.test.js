const recebedorService = require("../services/recebedorService");
const recebedorController = require("../controllers/recebedorController")
const request = require('supertest');

const endpoint = 'http://localhost:3000/'


beforeEach(async () => {

});

afterEach(async () => {

})



describe('Recebedores Route', () => {
    describe('failed cases', () => {
        it('should return status 500 if there are any problem with the recebedor service', async () => { 
            jest.spyOn(recebedorService, 'getRecebedores').mockImplementation(async () => {
                throw new Error("Service Error!")
            });
           const req = {};
           const res = {
                code: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
           };
           const next = {};

            await recebedorController.getRecebedores(req, res, next);

            expect(res.status).toHaveBeenCalledWith(500);
        }, 6000)
    })
    describe('success cases', () => {
        it('should return a list of recebedores', async () => {
            
        })
    })
});
