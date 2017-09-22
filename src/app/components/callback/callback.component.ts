import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  code: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    // this.code = this.route.snapshot.params['code'];
    let code = window.location.href.split('code=');
    this.spotifyService.getToken(code[1]).subscribe(res => console.log(res));
    // console.log(this.spotifyService.getToken(code[1]));
    
    
  }

}


