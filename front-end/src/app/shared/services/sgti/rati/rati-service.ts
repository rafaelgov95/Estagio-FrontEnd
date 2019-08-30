import { Rati } from './../../../modelos/rati-modelo';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class RatiService {

    Rati: any
    constructor(private http: HttpClient) { }
    setRati(rati: any) {
        this.Rati = rati
    }
    getRati() {
        return this.Rati
    }
    getAutentica(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // 'Authorization':  sessionStorage.getItem("TokenAPI")
            })
          };
        return this.http.get("http://localhost:8080/rati/", httpOptions)
            .pipe(map((response: Response) => {
                if (response) {
                    return response
                }
            }));
    }
    getAllRati(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
              // 'Authorization':  sessionStorage.getItem("TokenAPI")
            })
          };

        return this.http.get("http://localhost:8080/rati/")
            .pipe(map((response: Response) => {
                return response.json()
            }));
    }


    AddRati(titulo, prioridade, mensagem,numero): Observable<any> {
     
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + btoa(JSON.parse(localStorage.getItem("currentUser"))['authToken'] + ':' + JSON.parse(localStorage.getItem("currentUserRole"))['dn'])

              // 'Authorization':  t.getItem("TokenAPI")
            })
          };
          // CN=Rafael Goncalves de Oliveira Viana,OU=CPCX,OU=FUNCIONARIOS,OU=USUARIOS,OU=UFMS,DC=dominio,DC=ufms,DC=br
          // 006cab0f-dbc4-49fc-a86a-78fce4bfa827
        let bodyString = JSON.stringify({"nomeCompleto":"","cpf":"04634501163","tipo":"fasdffasdaas","email":"rafaelgov95@gail.com", "titulo": titulo, "prioridade": prioridade, "mensagem": mensagem , "numero": numero})

        return this.http.post("http://localhost:8080/rati/", bodyString, httpOptions)
            .pipe(map((response: Response) => {
                if (response) {
                    return response
                }
            }));
    }


    AddResposta(body: Rati): Observable<any> {
       
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':  sessionStorage.getItem("TokenAPI")
            })
          };


        let bodyString = JSON.stringify(body)

        return this.http.post("/api/rati/resposta", bodyString, httpOptions)
            .pipe(map((response: Response) => {
                if (response) {
                    return response.json()
                }
            }));
    }
}