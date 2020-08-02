import { LightningElement, api } from 'lwc';

export default class producer extends LightningElement {
    state = 'list';
    producer;

    handleNavigate(event) {
        console.log('receive event');
        this.state = event.detail.state;
        // this.producer = event.detail.producer;
        this.producer = event.detail.name;
        console.log('current producer in navi: ' + this.producer);
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
