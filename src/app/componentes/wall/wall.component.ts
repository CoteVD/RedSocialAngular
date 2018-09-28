import { Component, OnInit } from '@angular/core';
import { WallService } from '../../services/wall.service';
// import { Profile } from '../../Interface/profile.interface';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})

// export class ProfileNameComponent implements OnInit {
//  profile: Profile = {
//    nameUser: ''
//  };
//
//  ngOnInit() {}
// }

export class WallComponent implements OnInit {
  messages: any[] = [];
  numberOfLike: number = 0;

  constructor(private _wallService: WallService) {
    this._wallService.getData().subscribe(data => {
      console.log('ESTA ES LA DATA > ' + JSON.stringify(data));
      this.messages = data;
    });
  }

  ngOnInit() {}

  delete(key$: string) {
    this._wallService.delete(key$).subscribe(answer => {
      if (answer) {
        console.error(answer);
      } else {
        delete this.messages[key$];
      }
    });
  }

  likeClick() {
    this.numberOfLike++;
  }

}
