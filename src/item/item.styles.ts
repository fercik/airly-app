import { MeasurementsValue } from '../api/types';

export function itemStyles(measurement: MeasurementsValue): HTMLStyleElement {
    const style = document.createElement('style');
    
    style.textContent = `
        :host {
                background-color: #ffffff;
                border-radius: 8px;
                box-sizing: border-box;
                display: inline-flex;
                font-family: Arial, sans-serif;
                margin: 8px;
                padding: 16px;
            }
            
            .box {
                display: flex;
                flex: 1;
                flex-direction: row;
                width: 100%;
            }
            
            .box__value {
                align-items: center;
                box-sizing: border-box;
                color: ${measurement.color};
                display: flex;
                font-size: 36px;
                justify-content: center;
                padding: 8px 24px 8px 8px;
            }
            
            .box__info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                line-height: 1.5;
            }
            
            .box__info__title {
                font-size: 16px;
                font-weight: 700;
            }
    `;
    
    return style;
}
