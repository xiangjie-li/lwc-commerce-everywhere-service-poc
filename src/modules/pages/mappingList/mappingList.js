import { LightningElement } from 'lwc';
import { getProducerMappingList } from 'data/producerMappingList';
import { getConsumerMappingList } from 'data/consumerMappingList';

export default class mappingList extends LightningElement {
    producerMappingList = [];
    consumerMappingList = [];

    connectedCallback() {
        getProducerMappingList().then((result) => {
            this.producerMappingList = result;
            // console.log("get producer mapping list, first item is " + this.producerMappingList[0].config.url);
        });

        getConsumerMappingList().then((result) => {
            this.consumerMappingList = result;
            // console.log("get producer mapping list, first item is " + this.producerMappingList[0].config.url);
        });
    }

    handleNewClick() {
        console.log('click the new button');
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'config'
            }
        });
        console.log('sending click event');
        this.dispatchEvent(navigateEvent);
    }

    handleItemClick() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'details'
            }
        });
        this.dispatchEvent(navigateEvent);
    }

    handleNavigate(event) {
        console.log('receive event from details button');
        this.state = event.detail.state;
        this.name = event.detail.name;
        this.configName = event.detail.configName;
        this.mappingType = event.detail.mappingType;

        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: this.state,
                name: this.name,
                configName: this.configName,
                mappingType: this.mappingType
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
