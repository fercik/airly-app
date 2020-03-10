export interface MeasurementsValueJSON {
    name: string;
    value: number;
}

export interface MeasurementsValue {
    name: string;
    value: number;
    max: number | null;
    displayValue: string;
    progress: number | null;
    unit: string;
    color: string | null;
}
