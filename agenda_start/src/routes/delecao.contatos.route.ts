import express, { NextFunction, Request, Response } from 'express';

import ContatosStorageService from '../service/contatos.storage.service';


export default class DelecaoContatosRoute {
    
    public router = express.Router();

    constructor() {
        this.router.delete('/contatos/contato/:idEmpresa', this.removerContato);
    }

    public removerContato(request: Request, response: Response, next: NextFunction) {
        const idContato = parseInt(request.params.idEmpresa);
        ContatosStorageService.getIntance().removeContato(idContato);
        response.status(200).json();
    }

}