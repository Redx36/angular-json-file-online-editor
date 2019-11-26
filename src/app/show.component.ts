import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-show',
  template: '<div>{{showData()}}</div>'
})
export class ShowComponent implements OnInit {

  @Input()
  public data;

  constructor() {
  
  }

  ngOnInit() {
    
  }

  showData(){
    return JSON.stringify(this.data, null, 2);
  }

}
