import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {Config} from './config.service';
import {Plan} from './plan';
import {PlanlistComponent} from './planlist.component'
import {UploadComponent} from './upload.component'
import { LocalStorageModule } from 'angular-2-local-storage';
//import {PlanDetailComponent} from './plan-detail.component' //NEXT TRIAL


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlanlistComponent, UploadComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    draghere = Config.DRAG_HERE;
    inputmetadata = Config.INPUT_METADATA;

    suunnitelmat:Array<Plan>;

    constructor(){
        this.suunnitelmat = [
            new Plan(1,'MALLIKATU', 'KATUSUUNNITELMA JA TYYPPIPOIKKILEIKKAUS',6034, '002',"/app/plans/1.pdf"),
            new Plan(2,'MALLIKATU', 'KATU ASEMAPIIRUSTUS',6034,'010',"/app/plans/2.pdf")
        ]
    }
}
