import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WallComponent } from './wall.component';
import {WallWrite} from '../../Interface/wallWrite.interface';

@Component({
  selector: 'app-wall-write',
  templateUrl: './wall-write.component.html',
  styleUrls: ['./wall-write.component.css']
})
export class WallWriteComponent implements OnInit {

wallWrite: WallWrite = {
  nombre: '',
  curso: 'Cuarto Medio',
  mensage: ''
};

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.wallWrite);
  }

}
