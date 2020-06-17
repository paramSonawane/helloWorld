import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', //select by attribute (check app html <div app-servers></div>)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreation: string = "No Server was created";
  serverName: string = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreation = "Server Was Created";
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
