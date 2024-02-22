import { Component, OnInit } from '@angular/core';
import {SuggestService} from "../services/suggest.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-search-places',
  templateUrl: './search-places.component.html',
  styleUrls: ['./search-places.component.css']
})
export class SearchPlacesComponent implements OnInit {

  showMe = false
  isSidebarClosed = false;
  appName = 'Midway Travellers';
  places: any[] | undefined;
  search = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private suggestService: SuggestService) { }

  ngOnInit(): void {
    //this.getTravellPlaces();
  }

  inputValue: string = '';

  onSubmit() {
    console.log(this.search.value.name);
    this.showMe=true
    this.suggestService.getTravelPlacesbyName(this.search.value.name)
      .subscribe(data => {
        console.log(data)
        this.places = data
        if (this.places?.length == 0){
          this.showMe=false
        }

        this.saveType()
      })
  }

  saveType() {

    const type = this.places && this.places.length > 0 ? this.places[0].Type : null;

    this.suggestService.saveTravelPlacesbyName(this.search.value.name , type)
      .subscribe(data => {
        console.log(data)
        this.places = data

      })
  }

  getTravellPlaces() {
    this.suggestService.getTravelPlaces()
      .subscribe(data => {
        this.places = data;
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
