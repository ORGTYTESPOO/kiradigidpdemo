import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Plan} from './plan';
import {PlanlistComponent} from './planlist.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlanlistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    plans:Array<Plan>;

    constructor(){
        this.plans = [
            new Plan('MALLIKATU', 'KATUSUUNNITELMA JA TYYPPIPOIKKILEIKKAUS',6034, '002'),
            new Plan('MALLIKATU', 'KATU ASEMAPIIRRUSTUS',6034,'010'),
            new Plan('Mallikatu', '1-rakennusvaihe',6034, '020'),
            new Plan('Mallikatu', '1-rakennusvaihe',6034, '030'),
        ]
    }
}
