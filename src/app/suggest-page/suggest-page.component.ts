import { Component, OnInit } from '@angular/core';
import {SuggestService} from "../services/suggest.service";

@Component({
  selector: 'app-suggest-page',
  templateUrl: './suggest-page.component.html',
  styleUrls: ['./suggest-page.component.css']
})
export class SuggestPageComponent implements OnInit {
  places: any[] | undefined;
  isSidebarClosed = false;
  appName = 'Midway Travellers';
  show1 = false;

  constructor(private suggestService: SuggestService) { }

  ngOnInit(): void {
    this.show1 = false
    this.getTravellPlaces();
  }

  getTravellPlaces() {
    this.suggestService.getTravelPlaces()
      .subscribe(data => {
        this.places = data;
        console.log(this.places.length)
        if (this.places.length == 0){
           this.show1 = true;
        }
        console.log(this.places)
      })

  }

  restaurents(){
    this.suggestService.getRestauPlaces()
      .subscribe(data => {
        this.places = data;
      })
  }

  agents(){
    this.suggestService.getAgentPlaces()
      .subscribe(data => {
        this.places = data;
      })
  }

  spa(){
    this.suggestService.getSpaPlaces()
      .subscribe(data => {
        this.places = data;
      })
  }

  sports(){
    this.suggestService.getSportPlaces()
      .subscribe(data => {
        this.places = data;
      })
  }

  sidebarCollapsed: boolean = false;
  show: boolean = true;

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.isSidebarClosed = !this.isSidebarClosed;
    this.show = !this.show;
  }


  handleDivClick(index: number): void {
    const clickedDiv = this.places?.[index];
    if (clickedDiv) {
      console.log('Clicked Div:', clickedDiv);

      const url = `https://www.google.com/maps?q=${clickedDiv.latitude},${clickedDiv.longitude}`;
      window.open(url, '_blank');
      // Perform further actions with the clicked div data
    }
  }

}
