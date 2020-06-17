import { Component} from '@angular/core';

@Component({
    selector : '.app-server', //Select by class (check servers html <div class="app-server"></div>)
    templateUrl : './server.component.html' //user backtics `<your html code></>` to add inline html code
})
export class serverComponent{
    serverID: number = 10;
    serverStatus: string = "offline";
    
    getServerStatus(){
    return this.serverStatus;
    }
}