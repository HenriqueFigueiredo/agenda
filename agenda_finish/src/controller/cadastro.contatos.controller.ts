import { Body, JsonController, OnUndefined, Post } from 'routing-controllers';
import { injectable } from 'tsyringe';

import { ContatoInsert } from '../model/contato.insert.model';
import ContatosStorageService from '../service/contatos.storage.service';

@injectable()
@JsonController()
export default class CadastroContatosController {

    constructor(public contatosStorageService: ContatosStorageService) {}
    
    @OnUndefined(200)
    @Post('/contatos/contato')
    public incluirContato(@Body() novoContato: ContatoInsert) {        
        this.contatosStorageService.addContato(novoContato);        
    }

}