import { Estagio } from './../../modelos/estagio-modelo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { HttpClient,Http } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RatiComponent } from '../../../adm/sgti/rati/rati.component';
import { Rati } from './../../modelos/rati-modelo';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Injectable()
export class EstagioAPI {
    constructor(private http: HttpClient) { }


    BuscarEmpresa(cnpj): Observable<any> {
        headers.append('Content-Type', 'application/json');
        var url_cnpj = "/receita/api/cnpj/" + cnpj
        var headers = new Headers();
        headers.append('X-AUTH-TOKEN', JSON.parse(sessionStorage.getItem("currentUser"))['authToken']);
        console.log("Testando: ", url_cnpj)
        return this.http.get(url_cnpj)
            .pipe(map((response: Response) => {
                console.log(response.json())
                return response.json();
            }));
    }

    AddProposta(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':  sessionStorage.getItem("TokenAPI")
            })
          };

        return this.http.get("/api/estagio/", httpOptions)
            .pipe(map((response: Response) => {
            }));
    }



    getAreas(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':  sessionStorage.getItem("TokenAPI")
            })
          };

        return this.http.get("/api/areas", httpOptions)

            .pipe(map((response: Response) => {
                return response.json()
            }));
    }


    getAllRati(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':  sessionStorage.getItem("TokenAPI")
            })
          };

        return this.http.get("/api/rati", httpOptions)
            .pipe(map((response: Response) => {
                return response.json()
            }));
    }


    AddRati(titulo,prioridade,mensagem): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':  sessionStorage.getItem("TokenAPI")
            })
          };

        let bodyString = JSON.stringify({ "titulo":titulo,"prioridade":prioridade,"mensagem":mensagem})
        return this.http.post("/api/rati", bodyString, httpOptions)
            .pipe(map((response: Response) => {
                console.log(response)
                if (response) {
                    console.log("ADD RATI", response)
                }
            }));
    }

    

    getPerfil(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'X-AUTH-TOKEN':  JSON.parse(sessionStorage.getItem("currentUser"))['authToken']
            })
          };
        return this.http.post('https://sistemas5.ufms.br/passaporte-ws/api/ad/'+JSON.parse(sessionStorage.getItem("currentUserRole"))['dn'], httpOptions)
        .pipe(map((response: Response) => {
                       return response.json();
         }));
        
    }

    updatePassword(senhaAtual,senhaNova): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'X-AUTH-TOKEN':  JSON.parse(sessionStorage.getItem("currentUser"))['authToken']
            })
          };

        var login = JSON.parse(sessionStorage.getItem("currentUser"))['usuario']['passaporte']
        let bodyString = JSON.stringify({"login":login,"senhaAtual":senhaAtual,"senhaNova":senhaNova})
        return this.http.post('https://sistemas5.ufms.br/passaporte-ws/api/alterarSenha',bodyString,httpOptions)
        .pipe(map((response: Response) => {
            return  response.json();
        }));
    }

}