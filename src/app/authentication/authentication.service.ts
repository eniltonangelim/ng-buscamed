import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import { Usuario } from '../model/usuario.model';

@Injectable()
export class AuthenticationService {

    private authManager_:BehaviorSubject<AuthState>
        = new BehaviorSubject(AuthState.LoggedOut);
    private authState_:AuthState;
    authChange:Observable<AuthState>;

    private error: String;
    urlServico: string = "http://127.0.0.1:8080/login";

    constructor(private http: Http) {  
        this.authChange = this.authManager_.asObservable();
    }

    listar(): Observable<Usuario[]>{
        return this.http.get(this.urlServico)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUsuario(id: number){
        return this.http.get([this.urlServico,'/',id].join(""))
            .map(res => res.json())
            .catch(this.handleError);        
    }

    private extractData(res: Response){
        let body = res.json();
        return body as any[]|| {};
    }

    cadastrar(usuario: Usuario) {
        let urlServico = [this.urlServico, '/cadastro'].join("")
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(usuario);
        return this.http.post(urlServico, body, options).map(res => res.text());
    }

    login(usuario: Usuario) {
        let urlServico = this.urlServico;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(usuario);
        return this.http.post(urlServico, body, options)
            .do(res => this.setAuthState_(AuthState.LoggedIn))
            .map(res => res.text());
    }

    atualizar(usuario: Usuario) {
        this.urlServico; // + '/edit';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(usuario);
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
      return Observable.throw(errMsg);
    }

    logout():void {
        this.setAuthState_(AuthState.LoggedOut);
    }

    emitAuthState():void {
        this.authManager_.next(this.authState_);
    }

    private setAuthState_(newAuthState:AuthState):void {
        this.authState_ = newAuthState;
        this.emitAuthState();
    }
}

export const enum AuthState {
    LoggedIn,
    LoggedOut
}

export const AUTH_PROVIDERS: Array<any> = [
    { provide: AuthenticationService, useClass: AuthenticationService }
];