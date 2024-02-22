import {Component, OnInit} from '@angular/core';
import {SuggestService} from "../services/suggest.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  isSidebarClosed = false;
  appName = 'Midway Travellers';
  name: any;
  pname: any;
  type: any;
  sidebarCollapsed: boolean = false;
  show: boolean = true;

  constructor(private suggestService: SuggestService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name");
    console.log(localStorage.getItem("name"));


    this.suggestService.getplaceType()
      .subscribe(data => {
        for (const datum of data) {
          this.pname=datum[0]
          this.type=datum[1]
        }
      })

  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.isSidebarClosed = !this.isSidebarClosed;
    this.show = !this.show;
  }

  openLogoutConfirmation() {

  }

}
