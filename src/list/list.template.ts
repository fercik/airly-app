import { listStyles } from './list.styles';

interface ListTemplateProps {
    measurements: any[];
}

export function listTemplate({ measurements }: ListTemplateProps): DocumentFragment {
    const documentFragment = document.createDocumentFragment();
    documentFragment.append(listStyles());
    
    measurements.forEach((measurement: any) => {
        const airlyMeasurementsItem = document.createElement('airly-measurements-item');
        airlyMeasurementsItem.setAttribute('measurement', measurement);
        
        documentFragment.append(airlyMeasurementsItem);
    });
    
    return documentFragment;
}
