import { itemTemplate } from './item.template';
import { MeasurementsValue } from 'api/types';

export class ItemComponent extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    private measurement = this.mapAttribute<MeasurementsValue>('measurement');
    
    constructor() {
        super();
        
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.render();
    }
    
    private mapAttribute<T>(attributeName: string): T {
        const attribute = this.getAttribute(attributeName) || '{}';
        
        return JSON.parse(attribute) as T;
    }
    
    private render(): void {
        this._shadowRoot.innerHTML = itemTemplate({
            measurement: this.measurement,
        });
    }
}
