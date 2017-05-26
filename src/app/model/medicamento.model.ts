export class Medicamento {

    id: number;
    nome: string;
    codBarras: string;
    laboratorio: string
    dosagem: string;

	constructor(id?: number, nome?:string, codBarras?: string, laboratorio?: string, dosagem?: string) {
		this.id = id;
		this.nome = nome;
		this.codBarras = codBarras;
		this.laboratorio = laboratorio;
		this.dosagem = dosagem;
    }
}