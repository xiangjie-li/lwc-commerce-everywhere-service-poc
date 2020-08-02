import { LightningElement } from 'lwc';

export default class producerConnectionConfig extends LightningElement {
    handleNavigate() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
