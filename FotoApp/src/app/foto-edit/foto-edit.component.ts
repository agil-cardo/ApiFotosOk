import { Component, OnInit } from '@angular/core';
import { ApiFotoService } from '../Service/api-foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Foto } from '../Model/foto.model';

@Component({
  selector: 'app-foto-edit',
  templateUrl: './foto-edit.component.html',
  styleUrls: ['./foto-edit.component.scss']
})
export class FotoEditComponent implements OnInit {

  fotoUpdateForm: FormGroup;
  fotoData: any = null;
  // fotoData: Foto;
  id: number = this.actRoute.snapshot.params['id'];
  hasFoto: boolean = false;

  constructor(
    public ApiFoto: ApiFotoService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.ApiFoto.getFotos(id: Number)
    // this.ApiFoto.getFotos(+this.id)
    // el + "cast"  l'id  y resuelve el problema que sea number ou strign 
    // y se compila pero luego se vuelve a presentar el error de que espera un argumento y tiene 2
    // en this.ApiFoto.updateFoto(this.id, this.fotoData)

    // this.ApiFoto.getFotos()    

    this.ApiFoto.getFoto(this.id).subscribe(data => {
      console.log(data)
      this.fotoData = data;
    });

    this.fotoUpdateForm = this.formBuilder.group({
      // name: [this.fotoData.name],
      // titulo: [this.fotoData.titulo],
      // description: [this.fotoData.description],
      name: [],
      titulo: [],
      description: [],
    });

    setTimeout(() => {
      this.fotoUpdateForm.controls.name.setValue(this.fotoData.name);
      this.fotoUpdateForm.controls.titulo.setValue(this.fotoData.titulo);
      this.fotoUpdateForm.controls.description.setValue(this.fotoData.description);
      this.hasFoto = true;
    }, 2000);

    // this.initForm();
  }

  // async initForm() {

  //   await this.ApiFoto.getFoto(this.id).subscribe(data => {
  //     // console.log(data)
  //     this.fotoData = data;
  //   });

  //   this.fotoUpdateForm = this.formBuilder.group({
  //     name: [this.fotoData.name],
  //     titulo: [this.fotoData.titulo],
  //     description: [this.fotoData.description],
  //   });
  // }

  updateFoto() {
    if (window.confirm('Are you fu..ll sure to update?')) {
      // this.ApiFoto.updateFoto(this.id, this.fotoData)

      let foto = new Foto(
        this.id,
        this.fotoUpdateForm.controls['name'].value,
        this.fotoUpdateForm.controls['titulo'].value,
        this.fotoUpdateForm.controls['description'].value,
      )

      this.ApiFoto.updateFoto(foto)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['fotos-list'])
        })
    }
  }

}
