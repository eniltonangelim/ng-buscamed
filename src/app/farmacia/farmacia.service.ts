import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Farmacia } from '../model/farmacia.model';

@Injectable()
export class FarmaciaService {
    
    private error: String;
    urlServico: string = "http://127.0.0.1:8080/farmacia";

    constructor(private http: Http) {   }

    listar(): Observable<Farmacia[]>{
        return this.http.get(this.urlServico)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getFarmacia(id: number){
        return this.http.get([this.urlServico,'/',id].join(""))
            .map(res => res.json())
            .catch(this.handleError);        
    }

    private extractData(res: Response){
        let body = res.json();
        return body as any[]|| {};
    }

    cadastrar(farmacia: Farmacia) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(farmacia);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
    }

    atualizar(farmacia: Farmacia) {
        this.urlServico; // + '/edit';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(farmacia);
        return this.http.put(this.urlServico, body, options).map(res => res.text());
    }

    delete(id: number) {
      let url = this.urlServico + '/' + id;
          return this.http.delete(url).map(res => res.text());
    }

    buscar(nome: string){
        return this.http.get([this.urlServico,'/nome/',nome].join(""))
            .map(res => res.json())
            .catch(this.handleError);        
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
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
}