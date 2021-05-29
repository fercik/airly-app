export function listStyles(): HTMLStyleElement {
    const styles = document.createElement('style');
    
    styles.textContent = `
        :host {
                align-items: flex-start;
                display: flex;
                flex-wrap: wrap;
            }
    `;
    
    return styles;
}
