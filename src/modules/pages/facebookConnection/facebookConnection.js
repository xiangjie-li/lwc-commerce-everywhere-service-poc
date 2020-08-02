import { LightningElement, track } from 'lwc';

const URL = 'http://localhost:8081/connection/consumer/config/facebook';

export default class facebookConnection extends LightningElement {
    @track catalogId = '';
    error;

    handleChange(event) {
        this.catalogId = event.target.value;
    }

    handleClick() {
        // The Fetch API is currently not polyfilled for usage in IE11.
        // Use XMLHttpRequest instead in that case.
        var formData = new FormData();

        formData.append('catalogId', this.merchantId);

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
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }
}
