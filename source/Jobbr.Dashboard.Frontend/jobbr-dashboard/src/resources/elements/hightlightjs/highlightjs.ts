import { autoinject, bindable } from 'aurelia-framework';
import hljs from 'highlight.js';
import '../../../../node_modules/highlight.js/styles/monokai.css';

@autoinject
export class HighlightjsCustomElement {

  @bindable public code: string; 

  constructor(private element: Element) {
  }

  attached() {
    let foo = document.querySelector('code');

    hljs.highlightBlock(foo);
  }
}
