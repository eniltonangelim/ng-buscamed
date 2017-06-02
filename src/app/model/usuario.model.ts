export class Usuario {

    id: number;
    nome: string;
    email: string;
    senha: string

	constructor(obj?: any) {
		this.id = obj ? obj.id : null;
		this.nome = obj ? obj.nome : null;
		this.email =  obj ? obj.email : null;
		this.senha =  obj ? obj.senha : null;
    }

}