import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {FormControl, ɵValue} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  // sUrl = "http://127.0.0.1:5000/"

  sUrl = "http://18.234.162.76/"

  constructor(private http: HttpClient) { }

    login(username: ɵValue<FormControl<string | null>> | undefined, password: ɵValue<FormControl<string | null>> | undefined) {
    console.log("login 2 awa")
    const url = this.sUrl+'login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post(url, body, { headers }).pipe(map(response => response as string));
  }


}
