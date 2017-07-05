import {Component} from 'angular2/core';
import {Plan} from './plan';

@Component({
    selector: 'planlist',
    templateUrl: 'app/ts/planlist.component.html',
    inputs: ['suunnitelmat']
})

export class PlanlistComponent{
   
   message: string;
   onSelect(pl:Plan) {
        this.message = "./app/plans/"+ pl.id + ".pdf";
    
    }

};