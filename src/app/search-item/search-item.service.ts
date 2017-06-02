import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { Medicamento } from '../model/medicamento.model';
import { Alerta } from '../model/alerta.model';

@Injectable()
export class SearchItemService {

    private searchManager_:BehaviorSubject<Medicamento[]>
        = new BehaviorSubject(new Array<Medicamento>());
    private searchState_:Medicamento[];
    searchChange:Observable<Medicamento[]>;

    private term: String;
    private error: String;
    urlServico: string = "http://127.0.0.1:8080/medicamento";
    urlServicoAlerta: string = "http://127.0.0.1:8080/alerta-preco";

    constructor(private http: Http) { 
        this.searchChange = this.searchManager_.asObservable();
      }

    listar(): Observable<Medicamento[]>{
        return this.http.get(this.urlServico)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getMedicamento(id: number){
        return this.http.get([this.urlServico,'/',id].join(""))
            .map(res => res.json())
            .catch(this.handleError);        
    }

    private extractData(res: Response){
        let body = res.json();
        return body as any[]|| {};
    }

    cadastrar(medicamento: Medicamento) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(medicamento);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
    }

    cadastrarAlerta(alerta: Alerta) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(alerta);
        return this.http.post(this.urlServicoAlerta, body, options).map(res => res.text());
    }

    atualizar(medicamento: Medicamento) {
        this.urlServico;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(medicamento);
        return this.http.put(this.urlServico, body, options).map(res => res.text());
    }

    delete(id: number) {
      let url = this.urlServico + '/' + id;
          return this.http.delete(url).map(res => res.text());
    }

    buscar(term: string) {
        return this.http.get([this.urlServico, '/nome/', term].join(""))
            .do(res => this.setResultSearch_(res.json()))
            .map(res => res.json())
            .catch(this.handleError);        
    }

    emitResultChange(): void {
        this.searchManager_.next(this.searchState_);
    }

    private setResultSearch_(medicamento: Medicamento[]){
        console.log(medicamento)
        this.searchState_ = medicamento;
        this.emitResultChange();
    }

    searchByNome(nome: string): Observable<Medicamento[]> {
        console.log(nome)
        let url = this.urlServico + '/nome/' + `${nome}`
        return this.http
           .get(url)
           .map(res => res.json().data as Medicamento[]);
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

    setTerm(term: String): void {
        this.term = term;
    }

}
