import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class HelloWorld extends LitElement {
  
  static properties = {
    who: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'srkk-cs-field',
      fallbackDisableSubmit: false,
      version: '1.0',
      properties: { //A custom configuration field. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        value: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to',
          isValueField: true
        }
      }
    };
  }
  
  constructor() {
    super();
    this.who = 'World';
  }

  render() {
    return html`<p>Hello ${this.who}<p/>`;
  }
}

// registering the web component
const elementName = 'srkk-cs-field';
customElements.define(elementName, HelloWorld);
