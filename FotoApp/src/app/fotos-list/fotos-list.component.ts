import { Component, OnInit } from '@angular/core';
import { ApiFotoService } from '../Service/api-foto.service';

@Component({
  selector: 'app-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.scss']
})
export class FotosListComponent implements OnInit {

  fotos: any[] = [];

  constructor(private ApiFoto: ApiFotoService) { }

  ngOnInit(): void {
    this.loadFoto();
  }

  loadFoto() {
    return this.ApiFoto.getFotos().subscribe( data => {
      this.fotos = data; 
    });
  }

  supFoto(id:number) {
    if (window.confirm('Are you fu..ll delete ?')) {
      return this.ApiFoto.deleteFoto(id).subscribe( data => console.log(data));
    }
  }
}

