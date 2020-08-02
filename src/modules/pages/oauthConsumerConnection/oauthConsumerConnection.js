import { LightningElement, track } from 'lwc';

const URL = 'http://localhost:8081/connection/config/consumer/';

export default class oauthConsumerConnection extends LightningElement {
    @track name;
    @track consumerConfig = {
        url: '',
        tokenUrl: '',
        authorizeUrl: '',
        scope: '',
        client_id: '',
        clientSecret: '',
        APIKey: ''
    };
    error;

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleUrlChange(event) {
        this.consumerConfig.url = event.target.value;
    }

    handleTokenUrlChange(event) {
        this.consumerConfig.tokenUrl = event.target.value;
    }

    handleAuthorizeUrlChange(event) {
        this.consumerConfig.authorizeUrl = event.target.value;
    }

    handleScopeChange(event) {
        this.consumerConfig.scope = event.target.value;
    }

    handleClientIdChange(event) {
        this.consumerConfig.clientId = event.target.value;
    }

    handleClientSecretChange(event) {
        this.consumerConfig.clientSecret = event.target.value;
    }

    handleAPIKeyChange(event) {
        this.consumerConfig.APIKey = event.target.value;
    }

    handleSave() {
        // The Fetch API is currently not polyfilled for usage in IE11.
        // Use XMLHttpRequest instead in that case.
        var payload;
        console.log('get click event!!!');

        payload = {
            userId: 'jack',
            type: 'consumer',
            name: this.name,
            config: this.consumerConfig
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
