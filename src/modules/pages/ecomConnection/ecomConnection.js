import { LightningElement, track } from 'lwc';

const URL = 'http://localhost:8081/connection/config/producer/';

export default class ecomConnection extends LightningElement {
    @track name;
    @track producerConfig = {
        // url: '',
        // tokenUrl: '',
        // authorizeUrl: '',
        // scope: '',
        // client_id: '',
        // clientSecret: '',
        // APIKey: ''
    };
    error;

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleUrlChange(event) {
        this.producerConfig.url = event.target.value;
    }

    handleTokenUrlChange(event) {
        this.producerConfig.tokenUrl = event.target.value;
    }

    handleAuthorizeUrlChange(event) {
        this.producerConfig.authorizeUrl = event.target.value;
    }

    handleScopeChange(event) {
        this.producerConfig.scope = event.target.value;
    }

    handleClientIdChange(event) {
        this.producerConfig.client_id = event.target.value;
    }

    handleClientSecretChange(event) {
        this.producerConfig.clientSecret = event.target.value;
    }

    handleAPIKeyChange(event) {
        this.producerConfig.APIKey = event.target.value;
    }

    handleSave() {
        // The Fetch API is currently not polyfilled for usage in IE11.
        // Use XMLHttpRequest instead in that case.
        var payload;
        console.log('get click event!!!');

        payload = {
            userId: 'jack',
            type: 'producer',
            name: this.name,
            config: this.producerConfig
        };

        fetch(URL + this.name, {
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
}
