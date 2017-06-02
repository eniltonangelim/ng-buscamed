import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Alerta } from '../model/alerta.model';

@Injectable()
export class AlertaService {
    private error: String;
    urlServico: string = "http://127.0.0.1:8080/alerta-preco";

    constructor(private http: Http) {   }

    listarByUser(id: number): Observable<Alerta[]>{
        return this.http.get([this.urlServico,'/usuario/',id].join(''))
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAlerta(id: number){
        return this.http.get([this.urlServico,'/',id].join(""))
            .map(res => res.json())
            .catch(this.handleError);        
    }

    private extractData(res: Response){
        let body = res.json();
        return body as any[]|| {};
    }

    cadastrar(alerta: Alerta) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(alerta);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
    }

    atualizar(alerta: Alerta) {
        this.urlServico; // + '/edit';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(alerta);
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