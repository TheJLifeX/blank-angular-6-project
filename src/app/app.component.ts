import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  secondaryRouterOutletContainer: boolean = false;

  links: string[] = [
    '/page-a',
    '/page-b',
    '/page-c'
  ];

  constructor(
    private titleService: Title,
    private locationService: Location
  ) { }

  ngOnInit(): void {
    this.locationService.subscribe((event) => {
      this.titleService.setTitle(`${event.url.replace('/ngx-scroll-position-restoration', '')} - Demo app - NgxScrollPositionRestoration`);
    });
  }
}
