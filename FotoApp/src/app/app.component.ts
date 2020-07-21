import { Component } from '@angular/core';
import { ApiFotoService } from './Service/api-foto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FotoApp';

  constructor(private _ApiFotoService: ApiFotoService) {

  }

  

}
