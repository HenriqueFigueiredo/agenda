
import express, {NextFunction, Request, Response} from 'express';
import { ContatoInsert } from '../model/contato.insert.model';
import ContatosStorageService from '../service/contatos.storage.service';

export default class CadastroContatosRoute {
    
    public router = express.Router();

    constructor() {
        this.router.post('/contatos/contato', this.incluirContato);
    }

    public incluirContato(request: Request, response: Response, next: NextFunction) {
        const novoContato =  request.body as ContatoInsert;
        ContatosStorageService.getIntance().addContato(novoContato)
        response.status(200).json();
    }

}