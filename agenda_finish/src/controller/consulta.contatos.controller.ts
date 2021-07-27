import { Get, JsonController, Param } from 'routing-controllers';
import { injectable } from 'tsyringe';

import ContatosStorageService from '../service/contatos.storage.service';


@injectable()
@JsonController('/contatos')
export default class ConsultaContatosController {

    constructor(public contatosStorageService: ContatosStorageService) {}

    @Get('/all')
    public listarContatos() {
        return this.contatosStorageService.getTodosContatos();
    }

    @Get('/contato/:idContato')
    public getContatoPorId(@Param('idContato') idContato: number) {         
         return this.contatosStorageService.getContatoById(idContato);
    }

}
