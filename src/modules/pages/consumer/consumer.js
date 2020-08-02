import { LightningElement, api } from 'lwc';

export default class consumer extends LightningElement {
    state = 'list';

    consumer;

    handleNavigate(event) {
        console.log('receive event');
        this.state = event.detail.state;
        // this.producer = event.detail.producer;
        this.consumer = event.detail.name;
        console.log('current consumer in navi: ' + this.consumer);
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
