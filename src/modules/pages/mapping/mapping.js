import { LightningElement, api } from 'lwc';

export default class mapping extends LightningElement {
    state = 'list';

    name;
    configName;
    mappingType;

    handleNavigate(event) {
        console.log('receive event');
        this.state = event.detail.state;
        // this.producer = event.detail.producer;
        this.name = event.detail.name;
        this.configName = event.detail.configName;
        this.mappingType = event.detail.mappingType;
    }

    // handleNavigate(event) {
    //     console.log("receive event")
    //     this.state = event.detail.state;
    //     console.log("current event" + this.state);
    // }

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
