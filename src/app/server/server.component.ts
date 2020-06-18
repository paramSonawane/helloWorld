import { Component} from '@angular/core';

@Component({
    selector : '.app-server', //Select by class (check servers html <div class="app-server"></div>)
    templateUrl : './server.component.html' //user backtics `<your html code></>` to add inline html code
})
export class serverComponent{
    serverID: number = Math.floor(Math.random()*10);
    serverStatus: string = Math.random() > 0.5 ? 'Online' : 'Offline';

    getServerStatus(){
    return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'Online' ? "green" : "red";
    }
}