export class Usuario {

    id: number;
    nome: string;
    email: string;
    senha: string;
    perfil: Roles;

	constructor(obj?: any) {
		this.id = obj ? obj.id : null;
		this.nome = obj ? obj.nome : null;
		this.email =  obj ? obj.email : null;
		this.senha =  obj ? obj.senha : null;
        this.perfil = obj ? obj.perfil : Roles.USUARIO;
    }

}

export const enum Roles {
    USUARIO,
    ADMIN
}