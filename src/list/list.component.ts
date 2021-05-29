import { listTemplate } from './list.template';
import { MeasurementsValue } from '../api/types';
import { getMeasurementsByInstallationId } from '../api/get-by-installation-id';

export class ListComponent extends HTMLElement {
    private _shadowRoot: ShadowRoot;
    private measurements: MeasurementsValue[] = [];
    
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    
    public connectedCallback(): void {
        getMeasurementsByInstallationId(9916)
            .then(data => {
                this.measurements = data;
                this.render();
            });
    
        this.render();
    }
    
    private render(): void {
        this._shadowRoot.append(listTemplate({
            measurements: this.measurements.map(m => btoa(JSON.stringify(m))),
        }));
    }
}
