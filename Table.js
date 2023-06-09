import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class SRKKFPTable extends LitElement {
  
  static properties = {
    col1: {type: String},
    col2: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'srkkfptable2',
      fallbackDisableSubmit: false,
      version: '1.3',
      properties: { //A custom configuration field. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        col1: {
          type: 'string',
          title: 'col1',
          description: 'Column 1 values',
          isValueField: true
        },
        col2: {
          type: 'string',
          title: 'col2',
          description: 'Column 2 values',
          isValueField: true
        }
      },
      events: ["ntx-value-change"]
    };
  }
  
  constructor() {
    super();
    //this.who = 'World';
  }
  
  onChange(e) {
    const args = {
        bubbles: true,
        cancelable: false,
        composed: true,
        // value coming from input change event. 
        detail: e.target.value,
    };
    const event = new CustomEvent('ntx-value-change', args);
    this.dispatchEvent(event);
}

tableHeader() {
  return html`<tr><th>Header 1</th></tr>`;
}

  render() {
    return html`<table><thead>
      ${this.tableHeader()}
    </thead><tbody></tbody></table>`;
  }
}

// registering the web component
const elementName = 'srkkfptable2';
customElements.define(elementName, SRKKFPTable);
