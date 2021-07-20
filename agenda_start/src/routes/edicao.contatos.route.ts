
import express, {NextFunction, Request, Response} from 'express';
import { ContatoInsert } from '../model/contato.insert.model';
import ContatosStorageService from '../service/contatos.storage.service';

export default class EdicaoContatosRoute {
    
    public router = express.Router();

    constructor() {
        this.router.put('/contatos/contato/:idEmpresa', this.editarContato);
    }

    public editarContato(request: Request, response: Response, next: NextFunction) {
        const idContato = parseInt(request.params.idEmpresa);
        const contato =  request.body as ContatoInsert;
        ContatosStorageService.getIntance().updateContato(idContato, contato);
        response.status(200).json();
    }

}