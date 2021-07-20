
import express, {NextFunction, Request, Response} from 'express';
import ContatosStorageService from '../service/contatos.storage.service';

export default class ConsultaContatosRoute {
    
    public router = express.Router();

    constructor() {
        this.router.get('/contatos/all', this.listarContatos);
        this.router.get('/contatos/contato/:idContato', this.getContatoPorId)
    }

    public listarContatos(request: Request, response: Response, next: NextFunction) {
        response.status(200).json(ContatosStorageService.getIntance().getTodosContatos());
    }

    public getContatoPorId(request: Request, response: Response, next: NextFunction) {
        const idContato = parseInt(request.params.idContato);
        response.status(200).json(ContatosStorageService.getIntance().getContatoById(idContato));
    }

}
