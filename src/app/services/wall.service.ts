import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WallWrite } from '../Interface/wallWrite.interface';
import { Profile } from '../Interface/profile.interface';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class WallService {
  wallURL = 'https://redsocialangular-93d26.firebaseio.com/mensaje.json';
  editURL = 'https://redsocialangular-93d26.firebaseio.com/mensaje/';

  constructor(private http: Http) {}

  newMessage(wallWrite: WallWrite) {
    const body = JSON.stringify(wallWrite);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.wallURL, body, { headers })
    .map(res => {
      console.log('MENSAJE NUEVO > ' + JSON.stringify(res.json()));
      return res.json();
    });
  }

  editMessage(wallWrite: WallWrite, key$: string) {
    const body = JSON.stringify(wallWrite);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.editURL}/${key$}.json`;
    return this.http.put(url, body, { headers }).map(res => {
      console.log('MENSAJE EDITAR > ' + JSON.stringify(res.json()));
      return res.json();
    });
  }

  getID(key$: string) {
    const url = `${this.editURL}/${key$}.json`;
    console.log(`KEY REAL > ${key$}`);
    return this.http.get(url).map(res => res.json());
  }

  getData() {
    return this.http.get(this.wallURL).map(res => {
      console.log('GET DATA > ' + JSON.stringify(res.json()));
      return res.json();
    });
  }

  delete(key$: string) {
    // Confirmación para borrar mensaje
    const option = confirm('¿Está seguro de querer borrar su mensaje?');
    if (option === true) {
      // Caso borrar mensaje
      const url = `${this.editURL}/${key$}.json`;
      return this.http.delete(url).map(res => res.json());
    } else {
      // Caso contrario
      alert('No se borró el mensaje.');
    }
  }
}
