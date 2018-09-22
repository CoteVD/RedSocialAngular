import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WallWrite } from '../Interface/wallWrite.interface';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class WallService {
  wallURL: string =
    'https://redsocialangular-93d26.firebaseio.com/mensaje.json';
  editURL: string = 'https://redsocialangular-93d26.firebaseio.com/mensaje/';

  constructor(private http: Http) {}

  newMessage(wallWrite: WallWrite) {
    let body = JSON.stringify(wallWrite);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.wallURL, body, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  editMessage(wallWrite: WallWrite, key$: string) {
    let body = JSON.stringify(wallWrite);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.editURL}/${key$}.json`;
    return this.http.put(url, body, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getID(key$: string) {
    let url = `${this.editURL}/${key$}.json`;
    return this.http.get(url).map(res => res.json());
  }

  getData() {
    return this.http.get(this.wallURL).map(res => res.json());
  }
}
