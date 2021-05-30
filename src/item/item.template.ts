import { itemStyles } from './item.styles';
import { MeasurementsValue } from '../api/types';

interface ItemTemplateProps {
    measurement: MeasurementsValue;
}

export function itemTemplate({ measurement }: ItemTemplateProps): DocumentFragment {
    const documentFragment = document.createDocumentFragment();
    const box = document.createElement('div');
    
    box.classList.add('box');
    box.innerHTML = `
        ${ measurement.progress ? `<div class="box__value">${measurement.progress}%</div>` : '' }
        <div class="box__info">
            <div class="box__info__title">${measurement.name}</div>
            <div class="box__info__content">Current: ${measurement.displayValue}</div>
            ${ measurement.max ? `<div class="box__info__content">Max: ${measurement.max} ${measurement.unit}</div>` : '' }
        </div>
    `;
    
    documentFragment.append(itemStyles(measurement));
    documentFragment.append(box);
    
    return documentFragment;
}
