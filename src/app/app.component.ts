import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QueryData } from './state/query';
import { AsyncPipe, NgClass } from '@angular/common';
import { inject } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { NgpButton } from "ng-primitives/button";
import { FormsModule } from '@angular/forms';

import ButtonExample from './ui/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, FormsModule, NgClass, ButtonExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';

  SERVICE_QUERY = inject(QueryData);

  username$: Observable<string>;
  isDarkTheme$: Observable<boolean>;
  constructor() {
    this.username$ = this.SERVICE_QUERY.selectUsername();
    this.isDarkTheme$ = this.SERVICE_QUERY.selectIsDark();
  }

  newName: string = '';

  // El problema de esto es que solo obtiene por asi decirlo el valor inicial que se emite
  name$ = this.SERVICE_QUERY.getValue().username;
  isDark$ = this.SERVICE_QUERY.getValue().isDark;

  // Obtenemos el valor en bruto observable de un store con la ayuda del query del store de akita
  // Estos valores son reactivos, por lo cual cada ves que se cambian estos valores igual
  selectedTheme = this.SERVICE_QUERY.select((e) => e.isDark);
  selectName = this.SERVICE_QUERY.select((state) => state.username);
  selectedLoading = this.SERVICE_QUERY.selectLoading();

  // Para cambiar clave de un store, podemos utilizar el metodo update para actualizar el valor.

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.selectName);
    console.log(this.selectedTheme);
    console.log(this.SERVICE_QUERY.select('count'));

    this.SERVICE_QUERY.select('username');
  }

  updateNamee(name: string) {
    console.log('actuuu');
    console.log(name);
    // Asumo que el método updateName está en tu servicio (storeData o MyService)
    this.SERVICE_QUERY.updateName(name); // Llama al método de actualización del servicio
  }

  submitFormName(): void {
    this.updateNamee(this.newName);
  }

  changeThemeee() {
    this.SERVICE_QUERY.changeTheme(); // Llama al método de actualización del servicio
  }
}
