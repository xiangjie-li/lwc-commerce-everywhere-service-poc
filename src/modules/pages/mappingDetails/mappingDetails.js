import { LightningElement, api } from 'lwc';
import { getProducerMapping } from 'data/producerMappingDetails';
import { getConsumerMapping } from 'data/consumerMappingDetails';

export default class mappingDetails extends LightningElement {
    // connectedCallback() {
    //     getProducerConfig().then(result => {
    //         this.producerConfig = result;
    //     });
    // }

    // connectedCallback() {
    //     this.producerConfig = getProducerConfig();
    // }

    mapping;
    // configItems=[];
    @api name;
    @api configName;
    @api mappingType;
    isProducer = false;
    isConsumer = false;

    connectedCallback() {
        if (this.mappingType === 'producer') {
            this.isProducer = true;
            this.isConsumer = false;
            getProducerMapping(this.name, this.configName).then((result) => {
                this.mapping = result;
                // this.configItems = Object.keys(this.producerMapping.config);
                // console.log("get producer config, response is " + this.producerConfig.config.url);
            });
        } else {
            this.isProducer = false;
            this.isConsumer = true;
            getConsumerMapping(this.name, this.configName).then((result) => {
                this.mapping = result;
            });
        }
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
