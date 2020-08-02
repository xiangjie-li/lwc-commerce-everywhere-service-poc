import { LightningElement } from 'lwc';

export default class consumerConnectionConfig extends LightningElement {
    selectedConsumer = '';

    handleNavigate() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }

    // handleChange(event) {
    //     console.log("selected consumer changed")
    //     this.selectedConsumer = event.target.value;
    //     console.log(this.selectedConsumer)
    // }

    // @api
    // get isConsumerGoogle() {
    //     return this.selectedConsumer === 'google';
    // }

    // get isConsumerFacebook() {
    //     return this.selectedConsumer === 'facebook';
    // }
}
