import { compile } from 'handlebars';

interface ListTemplateProps {
    measurements: any[];
}

const template = compile(`
    {{#each measurements}}
        <airly-measurements-item measurement="{{this}}"></airly-measurements-item>
    {{/each}}
`);

export function listTemplate(props: ListTemplateProps): string {
    return `
        <style>
            :host {
                align-items: flex-start;
                display: flex;
                flex-wrap: wrap;
            }
        </style>
        
        ${template(props)}
    `;
}
