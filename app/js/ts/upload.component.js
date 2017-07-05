System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UploadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // selector: css selector that identifies this component in a template
            UploadComponent = (function () {
                function UploadComponent() {
                    this.dragFileAccepted = new core_1.EventEmitter();
                    this.isHovering = false;
                }
                UploadComponent.prototype.onDragFileOverStart = function (event) {
                    if (!this.isHovering) {
                        this.isHovering = true;
                    }
                    this.preventDefaultAndStopPropagation(event);
                    return false;
                };
                ;
                UploadComponent.prototype.onDragFileOverEnd = function (event) {
                    this.preventDefaultAndStopPropagation(event);
                    return false;
                };
                UploadComponent.prototype.onDragFileAccepted = function (acceptedFile) {
                    if (this.dragFileAccepted) {
                        this.dragFileAccepted.emit({ file: acceptedFile });
                    }
                };
                UploadComponent.prototype.onDragFileDrop = function (event) {
                    this.preventDefaultAndStopPropagation(event);
                    this.FileSelectHandler(event);
                };
                UploadComponent.prototype.preventDefaultAndStopPropagation = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                };
                // file selection handler (can be called from drag, or from a file-requestor select box)
                UploadComponent.prototype.FileSelectHandler = function (e) {
                    this.isHovering = false; // cancel the hover
                    var files = e.target.files || e.dataTransfer.files; // fetch FileList object
                    // process all File objects
                    for (var i = 0, f; f = files[i]; i++) {
                        var ext = f.name.split('.')[f.name.split('.').length - 1]; //let: block scope instead of function scope // From Hints
                        if (ext.toLowerCase() != "pdf") {
                            this.onDragFileAccepted(f);
                        }
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], UploadComponent.prototype, "dragFileAccepted", void 0);
                UploadComponent = __decorate([
                    core_1.Component({
                        selector: 'upload',
                        templateUrl: 'app/ts/upload.component.html',
                        inputs: ['plan'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], UploadComponent);
                return UploadComponent;
            }());
            exports_1("UploadComponent", UploadComponent);
            ;
        }
    }
});
//# sourceMappingURL=upload.component.js.map