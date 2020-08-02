import { LightningElement } from 'lwc';
import { getProducerConnectionList } from 'data/producerConnectionList';

export default class producerConnectionList extends LightningElement {
    producerConnectionList = [];

    connectedCallback() {
        getProducerConnectionList().then((result) => {
            this.producerConnectionList = result;
            console.log(
                'get producer config list, first item is ' +
                    this.producerConnectionList[0].config.url
            );
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

    // send custom event to producer
    handleNavigate(event) {
        console.log('receive event from details button');
        this.state = event.detail.state;
        this.name = event.detail.name;

        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: this.state,
                name: this.name
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
