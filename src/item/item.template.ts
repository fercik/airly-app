import { compile } from 'handlebars';

import { itemStyles } from './item.styles';
import { MeasurementsValue } from '../api/types';

interface ItemTemplateProps {
    measurement: MeasurementsValue;
}

const template = compile(`
    ${itemStyles()}
    
    <div class="box">
        {{#if measurement.progress}}
            <div class="box__value">
                {{ measurement.progress }}%
            </div>
        {{/if}}
        <div class="box__info">
            <div class="box__info__title">{{ measurement.name }}</div>
            <div class="box__info__content">Current: {{ measurement.displayValue }}</div>
            {{#if measurement.max}}
                <div class="box__info__content">Max: {{ measurement.max }} {{ measurement.unit }}</div>
            {{/if}}
        </div>
    </div>
`);

export function itemTemplate(props: ItemTemplateProps): string {
    return template(props)
}
