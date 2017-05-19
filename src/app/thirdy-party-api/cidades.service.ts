import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CidadesService {
    
    private error: String;
    urlServico: string = "http://educacao.dadosabertosbr.com/api/cidades/ce";

    constructor(private http: Http) {   }

    listar(): Observable<any[]>{
        return this.http.get(this.urlServico)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCidade(id: number){
        return this.http.get([this.urlServico,'/',id].join(""))
            .map(res => res.json())
            .catch(this.handleError);        
    }

    private extractData(res: Response){
        let body = res.json();
        return body as any[]|| {};
    }

    cadastrar(cidade: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(cidade);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
    }

	atualizar(cidade: any) {
        this.urlServico; // + '/edit';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(cidade);
        console.log(body);
        return this.http.put(this.urlServico, body, options).map(res => res.text());
    }

	delete(id: number) {
		let url = this.urlServico + '/' + id;
        return this.http.delete(url).map(res => res.text());
	}

    searchByNome(nome: string): Observable<any[]> {
        let url = this.urlServico + '/nome/' + `${nome}`
        return this.http
           .get(url)
           .map(res => res.json() as any[]);
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}
