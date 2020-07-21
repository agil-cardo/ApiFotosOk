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
    
    let name = this.fotoForm.controls.name.value
    //on pourrait mettre un specialchars ici
    let titulo = this.fotoForm.controls.titulo.value
    let description = this.fotoForm.controls.description.value
    

    this._fotoApi.registerFoto(name, titulo, description)
    .subscribe(res => {
      console.log(res);
      
      // this.router.navigate(['/foto'])
    });
  }
}
