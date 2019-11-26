import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

import { schema } from './schema.value';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('editor') editor: JsonEditorComponent;
  @ViewChild('editorMult') editorMult: JsonEditorComponent;

  showData;

  options = new JsonEditorOptions();
  data: any = {
    products: [{
      name: 'car',
      product: [{
        name: 'honda',
        model: [
          { id: 'civic', name: 'civic' },
          { id: 'accord', name: 'accord' },
          { id: 'crv', name: 'crv' },
          { id: 'pilot', name: 'pilot' },
          { id: 'odyssey', name: 'odyssey' }
        ]
      }]
    }]
  };

  data2 = { ...this.data };
  options2 = new JsonEditorOptions();

  constructor() {
    this.options2.language = 'en';
    this.options.mode = 'code';
    this.options2.mode = 'text';
    this.options2.modes = this.options.modes = ['code', 'text', 'tree', 'view'];
    this.options2.schema = this.options.schema = schema;
    this.options2.statusBar = this.options.statusBar = false;
    // this.options.onChange = () => {
    //   console.log(`onChange 1`, this.editor.get());
    //   this.data = this.editor.get();
    // }

    // this.options2.onChange = () => {
    //   console.log(`onChange 2`, this.editorMult.get());
    //   this.data2 = this.editorMult.get();
    // }
  }

  showJson(d) {
    return JSON.stringify(d, null, 2);
  }

  changeLog(event = null) {
    this.showData = this.editor.get();
  }
}
