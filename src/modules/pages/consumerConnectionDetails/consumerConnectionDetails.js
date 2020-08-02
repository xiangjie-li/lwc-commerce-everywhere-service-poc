import { LightningElement, api } from 'lwc';
import { getConsumerConfig } from 'data/consumerConnectionDetails';

export default class consumerConnectionDetails extends LightningElement {
    consumerConfig;
    configItems = [];
    @api consumerName;

    connectedCallback() {
        getConsumerConfig(this.consumerName).then((result) => {
            this.consumerConfig = result;
            this.configItems = Object.keys(this.consumerConfig.config);
            console.log(
                'get consumer config, response is ' +
                    this.consumerConfig.config.url
            );
        });
    }

    handleEditClick() {}

    handleBackClick() {
        console.log('get back click!!!!');
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
