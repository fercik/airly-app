import { itemTemplate } from './item.template';

export class ItemComponent extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    
    constructor() {
        super();
        
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    
    public connectedCallback() {
        const attribute = this.getAttribute('measurement') || btoa('{}');
        const measurement = JSON.parse(atob(attribute));
        
        this._shadowRoot.append(itemTemplate({
            measurement,
        }));
    }
}
