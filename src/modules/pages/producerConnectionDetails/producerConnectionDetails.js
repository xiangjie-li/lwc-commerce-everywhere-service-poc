import { LightningElement, api } from 'lwc';
import { getProducerConfig } from 'data/producerConnectionDetails';

export default class producerConnectionDetails extends LightningElement {
    producerConfig;
    configItems = [];
    @api producerName;

    connectedCallback() {
        getProducerConfig(this.producerName).then((result) => {
            this.producerConfig = result;
            this.configItems = Object.keys(this.producerConfig.config);
            console.log(
                'get producer config, response is ' +
                    this.producerConfig.config.url
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
