import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', //select by tag name <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //can add multiple stylesheets and use in line styles using backtics (``)
})
export class AppComponent implements OnInit{

    constructor() { }

    ngOnInit(): void {
    }

}
