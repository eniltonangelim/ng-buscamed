export class Usuario {

    id: number;
    nome: string;
    email: string;
    senha: string

	constructor(id?: number, nome?:string, email?: string, senha?: string) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
    }

}