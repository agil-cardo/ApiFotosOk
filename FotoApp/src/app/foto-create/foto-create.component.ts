import { Component, OnInit, Input } from '@angular/core';
import { ApiFotoService } from '../Service/api-foto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Foto } from '../Model/foto.model';

@Component({
  selector: 'app-foto-create',
  templateUrl: './foto-create.component.html',
  styleUrls: ['./foto-create.component.scss']
})
export class FotoCreateComponent implements OnInit {

  @Input() fotoDetails = { name: '', titulo: '', description: '' }

  fotoForm: FormGroup;

  constructor(
    public ApiFoto: ApiFotoService,
    public router: Router,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.fotoForm = this.formBuilder.group({
      name: ['', Validators.required],
      titulo: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  addFoto() {

    if (window.confirm('Are you fu..ll Ad?')) {
      // this.ApiFoto.updateFoto(this.id, this.fotoData)

      let foto = new Foto(
        this.fotoForm.controls['name'].value,
        this.fotoForm.controls['titulo'].value,
        this.fotoForm.controls['description'].value
      );      

      this.ApiFoto.registerFoto(foto).subscribe(data => {
        console.log(data);
        this.router.navigate(['fotos-list'])
      })
    }
  }


}
