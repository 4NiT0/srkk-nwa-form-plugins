import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class HelloWorld extends LitElement {
  
  static properties = {
    htmlContent: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'srkk-cs-field',
      fallbackDisableSubmit: false,
      version: '1.0',
      properties: { //A custom configuration field. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        htmlContent: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to',
          isValueField: true
        }
      },
      events: ["ntx-value-change"]
    };
  }
  
  constructor() {
    super();
    this.htmlContent = 'World';
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

  headerTable(){
    return html`<table class="table"><thead><tr><th>Header 1</th></tr></thead>`;
  }
  render() {
    return html`
    ${this.headerTable()}
    <tbody><tr><td>${this.htmlContent}</td></tr></tbody></table>
    `;
  }
}

// registering the web component
const elementName = 'srkk-cs-field';
customElements.define(elementName, HelloWorld);
