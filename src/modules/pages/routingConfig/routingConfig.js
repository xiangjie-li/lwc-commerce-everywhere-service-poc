import { LightningElement } from 'lwc';
import { getProducerMappingList } from 'data/producerMappingList';
import { getConsumerMappingList } from 'data/consumerMappingList';

export default class routingConfig extends LightningElement {
    error;

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

    configName;
    consumerConfigs = [];
    producerConnection;
    producerMapper;
    schedule;

    handleConfigNameChange(event) {
        this.configName = event.target.value;
    }

    handleScheduleChange(event) {
        this.schedule = event.target.value;
    }

    handleProducerConnectionChange(event) {
        this.producerConnection = event.target.value;
    }

    handleProducerMapperChange(event) {
        this.producerMapper = event.target.value;
    }

    handleSave() {
        // The Fetch API is currently not polyfilled for usage in IE11.
        // Use XMLHttpRequest instead in that case.
        var payload;
        payload = {
            userId: 'jack',
            configName: this.configName,
            config: {
                producer_connection: {
                    name: this.producerConnection
                },
                producer_mapper: {
                    name: this.producerMapper
                },
                consumers: this.consumerConfigs,
                schedule: this.schedule
            }
        };
        fetch('http://localhost:8081/routing/config/', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                // fetch isn't throwing an error if the request fails.
                // Therefore we have to check the ok property.
                if (response.ok) {
                    console.log('request succeeded');
                }
            })
            .catch((error) => {
                this.error = error;
                console.log('request failed');
            });
    }

    handleBackClick() {
        console.log('get click!!!');
        console.log('get back click!!!!');
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }

    lastConsumerId = -1;
    consumers = [];

    handleNewConsumer() {
        this.lastConsumerId = this.lastConsumerId + 1;
        // Using immutable data structures. Creating a new array with old and new items instead of mutating the existing array with push()
        this.consumers = [
            ...this.consumers,
            {
                id: this.lastConsumerId
            }
        ];
        this.consumerConfigs = [
            ...this.consumerConfigs,
            {
                consumer_connection: {
                    name: ''
                },
                consumer_mapper: {
                    name: ''
                }
            }
        ];
    }

    handleConnection(event) {
        var id = event.detail.id;
        this.consumerConfigs[id].consumer_connection.name =
            event.detail.connection;
    }

    handleMapperchange(event) {
        var id = event.detail.id;
        this.consumerConfigs[id].consumer_mapper.name = event.detail.mapper;
    }
}
