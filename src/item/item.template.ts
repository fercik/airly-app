import { itemStyles } from './item.styles';
import { MeasurementsValue } from '../api/types';

interface ItemTemplateProps {
    measurement: MeasurementsValue;
}

export function itemTemplate({ measurement }: ItemTemplateProps): DocumentFragment {
    const documentFragment = document.createDocumentFragment();
    const box = document.createElement('div');
    const boxValue = document.createElement('div');
    const boxInfo = document.createElement('div');
    const boxInfoTitle = document.createElement('div');
    const boxInfoCurrent = document.createElement('div');
    const boxInfoMax = document.createElement('div');
    
    // Box
    box.classList.add('box');
    
    // Box value
    boxValue.classList.add('box__value');
    
    if (measurement.progress) {
        boxValue.textContent = `${measurement.progress}%`;
        box.append(boxValue);
    }
    
    // Box info title
    boxInfoTitle.classList.add('box__info__title');
    boxInfoTitle.textContent = measurement.name;
    
    // Box info current
    boxInfoCurrent.classList.add('box__info__content');
    boxInfoCurrent.textContent = `Current: ${measurement.displayValue}`;
    
    // Box info max
    boxInfoMax.classList.add('box__info__content');
    boxInfoMax.textContent = `Max: ${measurement.max} ${measurement.unit}`;
    
    // Box info
    boxInfo.classList.add('box__info');
    boxInfo.append(boxInfoTitle);
    boxInfo.append(boxInfoCurrent);
    
    if (measurement.max) {
        boxInfo.append(boxInfoMax);
    }
    
    documentFragment.append(itemStyles(measurement));
    documentFragment.append(box);
    documentFragment.append(boxInfo);
    
    return documentFragment;
}
