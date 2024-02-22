import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // sUrl = "http://127.0.0.1:5000/"
  sUrl = "http://18.234.162.76/"
  constructor(private http: HttpClient) { }

  signup(name: any, email: any, password: any) {
    console.log("signup 2 awa")
    const url = this.sUrl+'signup';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { name, email, password };

    return this.http.post(url, body, { headers }).pipe(map(response => response as any));
  }
}
