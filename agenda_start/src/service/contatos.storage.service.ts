import 'reflect-metadata';

import { ContatoModel } from '../model/contato.model';
import { ContatoInsert } from '../model/contato.insert.model';

export default class ContatosStorageService {
    
    private static instance: ContatosStorageService = new ContatosStorageService();    

    private contatos: ContatoModel[] = [];    
    
    private constructor() {     
        this.contatos.push(new ContatoModel(1, 'Hercules', '1111-1111'));
        this.contatos.push(new ContatoModel(2, 'Poseidon', '2222-2222'));
        this.contatos.push(new ContatoModel(3, 'Afrodite', '3333-3333'));
    }

    public static getIntance(): ContatosStorageService {
        return this.instance;
    }

    public getTodosContatos(): ContatoModel[] {
        return this.contatos;
    }

    public getContatoById(id: number): ContatoModel {
        console.log(this.contatos)
        return this.contatos.filter((x) => (x.id == id))[0];
    }

    public addContato(contato: ContatoInsert) {        
        const ultimoContato = this.contatos[this.contatos.length - 1];
        const newId = ultimoContato? ultimoContato.id + 1 : 1;
        this.contatos.push(new ContatoModel(newId, contato.nome, contato.telefone));
    }

    public removeContato(id: number) {
        const index = this.contatos.findIndex((x) => (x.id == id));
        if (index > -1) {
            this.contatos.splice(index, 1);
        }
    }

    public updateContato(id: number, contatoEditado: ContatoInsert) {
        const contato = this.contatos.filter((x) => (x.id == id))[0];
        if (contato) {
            contato.nome = contatoEditado.nome;
            contato.telefone = contatoEditado.telefone;
        }
    }    
}