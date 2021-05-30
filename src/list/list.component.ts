import { listTemplate } from './list.template';
import { getMeasurementsByInstallationId } from '../api/get-by-installation-id';

export class ListComponent extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    
    public async connectedCallback(): Promise<void> {
        const measurements = await getMeasurementsByInstallationId(9916);
    
        this._shadowRoot.append(listTemplate({
            measurements: measurements.map(m => btoa(JSON.stringify(m))),
        }));
    }
}
