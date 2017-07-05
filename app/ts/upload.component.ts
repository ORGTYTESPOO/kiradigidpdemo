/**
 * Here could be implemented file upload
 * https://stackoverflow.com/questions/40144260/angular-2-drag-and-drop-upload
 * Now this is from subatomicglue https://github.com/jellyjs/angular2-file-drop/issues/19
 * Hints from https://scotch.io/@minrock/how-to-create-a-drag-and-drop-file-directive-in-angular2-with-angular-cli-part-2
 */
import {Output, EventEmitter, Component} from 'angular2/core';
import {Config} from './config.service';
import {Plan} from './plan';

// selector: css selector that identifies this component in a template
@Component({
  selector: 'upload', 
  templateUrl: 'app/ts/upload.component.html',
  inputs: ['plan'], 
})

export class UploadComponent{
  draghere = Config.DRAG_HERE;

  @Output() public dragFileAccepted: EventEmitter<Object> = new EventEmitter();
  public isHovering: boolean = false;

  private onDragFileOverStart(event) {
    if (!this.isHovering) {
      this.isHovering = true;
    }
    this.preventDefaultAndStopPropagation(event);
    return false;
  };

  private onDragFileOverEnd(event): any {
    this.preventDefaultAndStopPropagation(event);
    return false;
  }

  private onDragFileAccepted(acceptedFile: File): any {
      if (this.dragFileAccepted) {
        this.dragFileAccepted.emit({ file: acceptedFile });
      }
  }

  private onDragFileDrop(event: any): any {
    this.preventDefaultAndStopPropagation(event);
    this.FileSelectHandler(event);
  }

  private preventDefaultAndStopPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // file selection handler (can be called from drag, or from a file-requestor select box)
  public FileSelectHandler(e) {
    this.isHovering = false;      // cancel the hover
    var files = e.target.files || e.dataTransfer.files;     // fetch FileList object

    // process all File objects
    for (var i = 0, f; f = files[i]; i++) {
        let ext = f.name.split('.')[f.name.split('.').length - 1]; //let: block scope instead of function scope // From Hints
        if( ext.toLowerCase( ) != "pdf")  { // Accept only pdf files. From Hints
          this.onDragFileAccepted(f);
          //Open metadata form here 
          //new Plan(form);
          //insert the plan in planlist array plans;
        }
    }
  }
};