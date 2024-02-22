import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SuggestService {

  // apiUrl = "http://127.0.0.1:5000/"
  apiUrl = "http://18.234.162.76/"

  constructor(private http: HttpClient) {}

  getTravelPlaces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'allplaces');
  }

  getRestauPlaces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'restplaces');
  }

  getAgentPlaces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'agentplaces');
  }

  getSportPlaces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'sportplaces');
  }

  getSpaPlaces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'spaplaces');
  }


  getplaceType() {

    return this.http.get<any>(this.apiUrl+'getType');
  }

  getTravelPlacesbyName(name: any) {
    console.log("signup 2 awa")
    const params = { location: name };

    return this.http.get<any>(this.apiUrl+'searchByName', { params });
  }

  saveTravelPlacesbyName(name: any, type: any) {
    console.log("signup 3 awa")
    const params = { name: name , type: type };


    return this.http.get<any>(this.apiUrl+'savetype', { params });
  }
}
