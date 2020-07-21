import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiFotoService {

  // apiUrl = 'http://localhost:8000';

  result: any;

  constructor(private http: HttpClient) { }

  public registerFoto(name: string, titulo: string, description: string)
  {

    let baseUrl = environment.apiUrl + "/fotos";

    // let name = "a2z62uml.png";
    // let titulo = "ùklmkmlkm";
    // let description = "foto de la abuela";

    let foto = {
      "name": name,
      "titulo": titulo,
      "description": description,
    }

    this.http.post<any>(baseUrl, foto)
      .subscribe(res => {

        this.result = res;

        console.log('registerFoto : ', res)

      });

      return this.result

  }

}


