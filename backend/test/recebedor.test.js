const recebedorService = require("../services/recebedorService");
const recebedorController = require("../controllers/recebedorController");
const recebedorMiddlware = require('../middlawares/recebedorMiddlaware');

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
        }, 6000);

        it('should return status 400 if the post request payload is invalid', async () => {
            const invalidPayload = {
                nome: "teste",
                email: "fulanodetal@gmail.com",
                chave_pix: "",
                chave_tipo: ""
            }
            const req = {
                body: invalidPayload
            };
            const res = {
                code: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };

            const next = {};

            await recebedorMiddlware.validateCreateRecebedor(req,res,next);

            expect(res.status).toHaveBeenCalledWith(400);
        }, 6000)
    });
    describe('success cases', () => {
        it('should return a list of recebedores', async () => {
            jest.spyOn(recebedorService, 'getRecebedores').mockImplementation(async () => {
                return [{
                    "id": 2,
                    "nome": "silas castro",
                    "cpf": null,
                    "email": null,
                    "chave_pix": null,
                    "chave_tipo": null,
                    "status": "rascunho",
                    "createdAt": "2024-05-20T19:06:33.000Z",
                    "updatedAt": "2024-05-20T19:06:33.000Z"
                }]
            });

            const req = {};
            const next = {};
            const res = {
                code: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };

            await recebedorController.getRecebedores(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
        });

        it('should create an new recebedor if the payload is valid', async () => {
            const validPayload = {
                nome: "teste",
                email: "fulanodetal@gmail.com",
                chave_pix: "11111",
                chave_tipo: "cpf"
            }
            const req = {
                body: validPayload
            };
            const res = {
                code: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };

            const next = {};

            await recebedorController.createRecebedor(req,res,next);

            expect(res.status).toHaveBeenCalledWith(201);
        });


        it('should update an recebedor if the payload is valid', async () => {
            jest.spyOn(recebedorService, 'updateRecebedor').mockImplementation(async () => {
                return {success: true};
            });
            const validPayload = {
                nome: "teste",
                email: "fulanodetal@gmail.com",
                chave_pix: "11111",
                chave_tipo: "cpf"
            }
            const req = {
                params: {
                    id: 1
                },
                body: validPayload
            };
            const res = {
                code: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };

            const next = {};

            await recebedorController.updateRecebedor(req,res,next);

            expect(res.status).toHaveBeenCalledWith(200);
        });
    })
});
