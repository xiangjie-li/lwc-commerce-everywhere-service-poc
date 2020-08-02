import { LightningElement, api } from 'lwc';
import { getRoutingConfig } from 'data/routingDetails';

export default class routingDetails extends LightningElement {
    // connectedCallback() {
    //     getProducerConfig().then(result => {
    //         this.producerConfig = result;
    //     });
    // }

    // connectedCallback() {
    //     this.producerConfig = getProducerConfig();
    // }
    routingConfig;
    @api configName;

    connectedCallback() {
        getRoutingConfig(this.configName).then((result) => {
            this.routingConfig = result;
            // this.configItems = Object.keys(this.producerConfig.config);
            // console.log("get producer config, response is " + this.producerConfig.config.url);
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
