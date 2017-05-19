export class Farmacia {
    id: number;
    nome: string;
    rua: string;
    numero: number;
    complemento: string;
    cep: string;

    constructor(nome?: string, rua?: string, numero?: number, complemento?: string, cep?: string){
        this.nome = nome;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.cep = cep;
    }

}