export function getMeasurementLimit(label: string): number {
    switch(label) {
        case 'PM25':
            return 25;
        case 'PM10':
            return 50;
        default:
            return -1;
    }
}

export function getUnit(label: string): string {
    switch (label) {
        case 'PM1':
        case 'PM25':
        case 'PM10':
            return 'µg/m³';
        case 'TEMPERATURE':
            return '°C';
        case 'HUMIDITY':
            return '%';
        case 'PRESSURE':
            return 'hPa';
        default:
            return '';
    }
}

export function getColor(progress: number): string {
    
    if (progress > 75) {
        return '#D32F2F';
    }
    
    if (progress > 50) {
        return '#F57C00';
    }
    
    return '#388E3C';
}

export function getPercentage(currentValue: number, max: number): number {
    return Number(Math.abs(currentValue / max * 100).toFixed(2));
}

export function getDisplayValue(value: number, label: string): string {
    return `${value} ${getUnit(label)}`;
}
