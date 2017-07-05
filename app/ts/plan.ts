/** 
 * Suunnitelma pitaisiko nimio olla erikseen
*/
export class Plan {
    //id:number; //Fetched from database
    id:number;
    title:string;
    planNumber:number;
    planSubcode:string;
    planDesc: string;
    planInspector: string;
    planAcceptor: string;
    planType: string;
    planAttachments: string[];
    planDate: Date;
    planInspected: Date;
    planAccepted: Date;
    planSavedIn: string;

    constructor(id:number,title:string, planDesc:string, planNumber:number, planSubcode:string,planSavedIn:string){
        this.id = id;
        this.title = title;
        this.planDesc = planDesc;
        this.planNumber = planNumber;
        this.planSubcode = planSubcode;
        this.planSavedIn = planSavedIn;
    }
}