/** 
 * Suunnitelma pitaisiko nimio olla erikseen
*/
export class Plan {
    //id:number; //Fetched from database
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

    constructor(title:string, planDesc:string, planNumber:number, planSubcode:string){
        this.title = title;
        this.planDesc = planDesc;
        this.planNumber = planNumber;
        this.planSubcode = planSubcode;
    }
}