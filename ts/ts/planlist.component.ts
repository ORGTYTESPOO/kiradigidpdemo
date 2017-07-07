import {Component} from 'angular2/core';
import {Plan} from './plan';

@Component({
    selector: 'planlist',
    templateUrl: 'app/ts/planlist.component.html',
    inputs: ['plans']
})

export class PlanlistComponent{
    onSelect(pl:Plan) {
        console.log(JSON.stringify(pl)); //for testing purpose
    }
};