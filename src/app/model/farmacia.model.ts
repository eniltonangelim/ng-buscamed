export class Farmacia {
    id: number;
    nome: string;
    rua: string;
    numero: number;
    complemento: string;
    cep: string;

    constructor(id?: number, nome?: string, rua?: string, numero?: number, complemento?: string, cep?: string){
        this.id = id;
        this.nome = nome;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
    }

}