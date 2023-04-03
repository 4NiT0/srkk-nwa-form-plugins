import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class SRKKFPTAble extends LitElement {
  
  static properties = {
    who: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'srkk-fp-table',
      fallbackDisableSubmit: false,
      version: '1.0',
      properties: { //A custom configuration field. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        col1: {
          type: 'string',
          title: 'Col1',
          description: 'Column 1 values',
          isValueField: true
        },
        col2: {
          type: 'string',
          title: 'Col2',
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
  return html`
    <tr><th>${new Date()}</th></tr>
  `'
}

  render() {
    return html`<table><thead>
      ${this.tableHeader}
    </thead><tbody></tbody></table>`;
  }
}

// registering the web component
const elementName = 'srkk-fp-table';
customElements.define(elementName, SRKKFPTAble);
