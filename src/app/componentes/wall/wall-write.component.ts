import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WallComponent } from './wall.component';
import { WallWrite } from '../../Interface/wallWrite.interface';
import { WallService } from '../../services/wall.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wall-write',
  templateUrl: './wall-write.component.html',
  styleUrls: ['./wall-write.component.css']
})
export class WallWriteComponent implements OnInit {
  wallWrite: WallWrite = {
    nombre: '',
    curso: 'Cuarto Medio',
    mensage: '',
    likes: 0,
    fecha: new Date()
  };

  nuevo = false;
  id: string;

  constructor(
    private _wallService: WallService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(parametros => {
      this.id = parametros['id'];
      if (this.id !== 'nuevo') {
        this._wallService.getID (this.id)
        .subscribe(data => this.wallWrite = data);
      } else {}
    });
  }

  ngOnInit() {}

  save() {
    console.log(this.wallWrite);
    if (this.id === 'nuevo') {
    this._wallService.newMessage(this.wallWrite).subscribe(
      data => {
        this.router.navigate(['/wall-write', data.name]);
      },
      error => console.log(error)
    );
    } else {
      this._wallService.editMessage(this.wallWrite, this.id).subscribe(
        data => {
          this.router.navigate(['/wall-write', data.name]);
        },
        error => console.log(error)
      );
    }
  }
 addNew (forma: NgForm) {
   this.router.navigate(['/wall-write', 'nuevo']);
   forma.reset();
 }
}
