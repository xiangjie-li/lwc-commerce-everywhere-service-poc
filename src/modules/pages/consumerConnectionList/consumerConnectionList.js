import { LightningElement } from 'lwc';
import { getConsumerConnectionList } from 'data/consumerConnectionList';

export default class consumerConnectionList extends LightningElement {
    consumerConnectionList = [];

    connectedCallback() {
        getConsumerConnectionList().then((result) => {
            this.consumerConnectionList = result;
            console.log(
                'get consumer config list, first item is ' +
                    this.consumerConnectionList[0].config.url
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

    // handleItemClick() {
    //   const navigateEvent = new CustomEvent('navigate', {
    //     detail: {
    //       state: 'details'
    //     }
    //   });
    //   this.dispatchEvent(navigateEvent);
    // }

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
