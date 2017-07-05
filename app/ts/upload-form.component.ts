import {Component} from 'angular2/core';

import {Plan} from './plan';

@Component({
    selector: 'upload-form',
    templateUrl: 'app/ts/upload-form.component.html',
    inputs: ['plans']
})

export class UploadFormComponent{
    onSave(pl:Plan) {
        
        console.log(JSON.stringify(pl)); //for testing purpose
        //plans.push (  new Plan(pl.title, pl.planDesc, pl.planNumber, pl.planSubcode));  //EI TOIMI
        
        //For demo purposes Save to planlist object 
    }
};