import { config } from '../config';
import { MeasurementsValue, MeasurementsValueJSON } from './types';
import { getColor, getDisplayValue, getMeasurementLimit, getPercentage, getUnit } from '../utils';

function toViewModel(json: MeasurementsValueJSON): MeasurementsValue {
    const max = getMeasurementLimit(json.name);
    const hasLimit = max > -1;
    return {
        name: json.name,
        value: json.value,
        max: hasLimit ? max : null,
        displayValue: getDisplayValue(json.value, json.name),
        progress: hasLimit ? getPercentage(json.value, max) : null,
        unit: getUnit(json.name),
        color: hasLimit ? getColor(getPercentage(json.value, max)) : null,
    };
}

export async function getMeasurementsByInstallationId(id: number): Promise<MeasurementsValue[]> {
    const response = await fetch(
        `${config.apiUrl}/measurements/installation?installationId=${id}`,
        {
            headers: {
                apikey: config.apiKey,
            }
        }
    );
    
    if (response.status >= 400) {
        return Promise.reject(response.json());
    }
    
    return response
        .json()
        .then(data => data.current.values.map(toViewModel) as MeasurementsValue[]);
}
