import { LightningElement, track } from 'lwc';
import { getCDMFields } from 'data/CDMFields';
import { getGoogleFields } from 'data/googleFields';

const URL = 'http://localhost:8081/producer_mapper/config/ecom';

export default class cdm2GoogleMapping extends LightningElement {
    @track ecom2cdmMapping = [];

    CDMFields;
    googleFields;

    error;

    connectedCallback() {
        this.CDMFields = getCDMFields();
        this.googleFields = getGoogleFields();
    }

    handleHostNameChange(event) {
        this.producerConfig.hostName = event.target.value;
    }

    handleClick() {
        // The Fetch API is currently not polyfilled for usage in IE11.
        // Use XMLHttpRequest instead in that case.
        var formData = new FormData();

        formData.append('hostName', this.producerConfig.hostName);
        formData.append('client_id', this.producerConfig.clientId);

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
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
}
