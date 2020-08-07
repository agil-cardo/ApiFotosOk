import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiFotoService } from 'src/app/Service/api-foto.service';



@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})

export class FotoComponent implements OnInit {

fotoForm: FormGroup;

  // name = new FormControl('');
  // titulo = new FormControl('');
  // description = new FormControl('');

  constructor(private _fotoApi: ApiFotoService, private _formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.fotoForm = this._formBuilder.group({
      name: ['', Validators.required],
      titulo: ['', Validators.required],
      description: ['', Validators.minLength(5)]
    })
  }

  addFoto () {
    console.log(this.fotoForm.value);
    
    //este log es la primera cosa que se escribe para verificar que recuperamos bien el valor de la variable fotoForm

    let name = this.fotoForm.controls.name.value
    //Pour nomer 'declarer' mes variables (on pourrait mettre un specialchars ici), on prends le control d'un d 'element du fotoForm name en este caso
    let titulo = this.fotoForm.controls.titulo.value
    let description = this.fotoForm.controls.description.value

    //jusq'a ici on a envoyé à la funct de l'Api les valeurs
    
// let resultado =

    this._fotoApi.registerFoto(name, titulo, description)
    .subscribe(res => {
      
      console.log(res);
      

    }
    ,error => {
      console.log(error);
      
    }
    );

    // console.log('test get:' ,  resultado);
    
    
    // .subscribe(res => {

    //   // este subscribe dice ERROR no sabemos why 

    //   //j'attends un reponse en este caso de "res"
    //   console.log(res);
      
    //   // this.router.navigate(['/foto'])  no tenia necesidad pues no tengo path foto
    // });
  }
}
