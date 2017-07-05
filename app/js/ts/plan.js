System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Plan;
    return {
        setters:[],
        execute: function() {
            /**
             * Suunnitelma pitaisiko nimio olla erikseen
            */
            Plan = (function () {
                function Plan(id, title, planDesc, planNumber, planSubcode, planSavedIn) {
                    this.id = id;
                    this.title = title;
                    this.planDesc = planDesc;
                    this.planNumber = planNumber;
                    this.planSubcode = planSubcode;
                    this.planSavedIn = planSavedIn;
                }
                return Plan;
            }());
            exports_1("Plan", Plan);
        }
    }
});
//# sourceMappingURL=plan.js.map