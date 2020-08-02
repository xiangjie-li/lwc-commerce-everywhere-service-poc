import { LightningElement, api } from 'lwc';

export default class detailsButton extends LightningElement {
    @api name = '';
    @api configName = '';
    @api mappingType = '';

    handleClick() {
        console.log('current name of this button: ' + this.name);
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'details',
                name: this.name,
                configName: this.configName,
                mappingType: this.mappingType
            }
        });
        console.log(
            'when click button, the mapping type of the event is: ' +
                this.mappingType
        );
        this.dispatchEvent(navigateEvent);
    }
}
