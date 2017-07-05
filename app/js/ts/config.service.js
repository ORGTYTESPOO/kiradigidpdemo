System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                }
                //MAIN
                Config.MAIN_HEADING = "Kiradigi Tietoportaali";
                //INSERT PLAN
                Config.DRAG_HERE = "Raahaa PDF-tiedosto tänne";
                Config.INPUT_METADATA = "Syötä nimiön tiedot";
                //PLANLIST
                Config.PLAN_LIST_HEADER = ["Nimi", "Kuvaus", "Numero", "Alanumero"];
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.service.js.map