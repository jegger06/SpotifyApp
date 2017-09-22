import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private client_id = '';
  private client_secret = '';
  private redirect_uri = 'http://localhost:4200/callback';

  constructor(private http: Http) {
    
  }

  login() {
    // &show_dialog=true
    return `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=code&redirect_uri=${this.redirect_uri}&show_dialog=true`; 
  }

  getToken(code: string) {
    const data = {grant_type: 'authorization_code', code: code, redirect_uri: this.redirect_uri };
    const body = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8', 'Authorization': 'Basic '+btoa(this.client_id+':'+this.client_secret)});
    return this.http.post('https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token', body, {headers: headers});
  }

}