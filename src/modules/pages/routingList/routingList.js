import { LightningElement } from 'lwc';
import { getRoutingList } from 'data/routingList';

export default class routingList extends LightningElement {
    routingList = [];

    connectedCallback() {
        getRoutingList().then((result) => {
            this.routingList = result;
            // console.log("get producer config list, first item is " + this.producerConnectionList[0].config.url);
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

    // send custom event
    handleNavigate(event) {
        console.log('receive event from details button');
        this.state = event.detail.state;
        this.configName = event.detail.configName;

        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: this.state,
                configName: this.configName
            }
        });
        this.dispatchEvent(navigateEvent);
    }

    routingStatus = 'waiting';

    handleStatusChange(event) {
        this.routingStatus = event.detail.status;
    }
}
