import { Usuario } from './usuario.model';
import { Medicamento } from './medicamento.model';

export class Alerta {

    id: number;
    usuario: Usuario;
    medicamento: Medicamento;
    precoAlvo: number;
    ativado: boolean;

	constructor(id?: number, usuario?: Usuario, medicamento?: Medicamento, precoAlvo?: number, ativado?: boolean) {
		this.id = id;
		this.usuario = usuario;
		this.medicamento = medicamento;
		this.precoAlvo = precoAlvo;
        this.ativado = ativado;
    }

}