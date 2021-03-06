import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Foto } from '../Model/foto.model';

// import { Http, Headers } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class ApiFotoService {

  // apiUrl = 'http://localhost:8000';  lo dejé comentado pues se puede pasar por aqui la primera vez 
  // sin pasar par environment

  result: any;

  constructor(private http: HttpClient) { }

  public registerFoto(foto: Foto) {

    let baseUrl = environment.apiUrl + "/fotos";

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json;charset=utf-8');
    headers.set('Host', 'https://localhost:8000');

    // let name = "a2z62uml.png";
    // let titulo = "ùklmkmlkm";
    // let description = "foto de la abuela";

    // creacion de nuestro Objeto foto

    // let foto = {
    //   "name": name,
    //   "titulo": titulo,
    //   "description": description,
    // }

    return this.http.post<any>(baseUrl, foto, { headers: headers });

  }

  public getFotos() {

    let baseUrl = environment.apiUrl + "/fotos";

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json;charset=utf-8');
    headers.set('Host', 'https://localhost:8000');

    return this.http.get<any>(baseUrl, { headers: headers });

  }

  public getFoto(id: number) {

    let baseUrl = environment.apiUrl + "/fotos/" + id;

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json;charset=utf-8');
    headers.set('Host', 'https://localhost:8000');

    return this.http.get<any>(baseUrl, { headers: headers });

  }


  public deleteFoto(id: number) {

    let baseUrl = environment.apiUrl + "/fotos/" + id;

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json;charset=utf-8');
    headers.set('Host', 'https://localhost:8000');

    return this.http.delete<any>(baseUrl, { headers: headers });

    // return this.http.delete<any>(baseUrl +'/'+ id, {headers: headers});
  }


  // public updateFoto(id,) {
  public updateFoto(foto: Foto) {

    let baseUrl = environment.apiUrl + '/fotos' + foto;

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json;charset=utf-8');
    headers.set('Host', 'https://localhost:8000');

    return this.http.put<any>(baseUrl, { headers: headers });

    // return this.http.delete<any>(baseUrl +'/'+ id, {headers: headers});
  }

}


