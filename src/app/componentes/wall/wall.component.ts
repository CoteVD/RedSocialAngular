import { Component, OnInit } from '@angular/core';
import { WallService } from '../../services/wall.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  messages: any[] = [];

  constructor(private _wallService: WallService) {
    this._wallService.getData().subscribe(data => {
      console.log(data);
      this.messages = data;
    });
  }

  ngOnInit() {
  }

}
