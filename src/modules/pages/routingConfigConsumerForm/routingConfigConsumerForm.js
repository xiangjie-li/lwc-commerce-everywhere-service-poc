import { LightningElement, api } from 'lwc';

export default class routingConfigConsumerForm extends LightningElement {
    _consumers = [];
    @api consumerMappingList;

    @api
    get consumers() {
        return this._consumers;
    }
    set consumers(value) {
        this._consumers = value;
    }

    handleConnectionChange(event) {
        var _id = event.target.id;
        _id = parseInt(_id.split('-')[0], 10);
        const connectionEvent = new CustomEvent('connection', {
            detail: {
                id: _id,
                connection: event.target.value
            }
        });
        this.dispatchEvent(connectionEvent);
    }

    handleMapperChange(event) {
        var _id = event.target.id;
        _id = parseInt(_id.split('-')[0], 10);
        const mapperchangeEvent = new CustomEvent('mapperchange', {
            detail: {
                id: _id,
                mapper: event.target.value
            }
        });
        this.dispatchEvent(mapperchangeEvent);
    }
}
