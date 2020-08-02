import { LightningElement, api } from 'lwc';

export default class routing extends LightningElement {
    state = 'list';
    configName = '';

    handleNavigate(event) {
        console.log('receive event');
        this.state = event.detail.state;
        this.configName = event.detail.configName;
        console.log('current event' + this.state);
    }

    @api
    get isStateList() {
        return this.state === 'list';
    }

    get isStateDetails() {
        return this.state === 'details';
    }

    get isStateConfig() {
        return this.state === 'config';
    }
}
