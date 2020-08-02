import { LightningElement, api } from 'lwc';

export default class runningButton extends LightningElement {
    @api configName = '';

    handleClick() {
        console.log('ready to run');

        const statuschangeEvent = new CustomEvent('statuschange', {
            detail: {
                status: 'running'
            }
        });
        console.log(
            'when click button, the mapping type of the event is: ' +
                this.mappingType
        );
        this.dispatchEvent(statuschangeEvent);

        fetch('http://localhost:8081/routing/execute/' + this.configName, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
            // body: JSON.stringify(payload)
        })
            .then((response) => {
                // fetch isn't throwing an error if the request fails.
                // Therefore we have to check the ok property.
                if (response.ok) {
                    console.log('request succeeded');
                }

                const statuschangeSuccessEvent = new CustomEvent(
                    'statuschange',
                    {
                        detail: {
                            status: 'success'
                        }
                    }
                );
                console.log(
                    'when click button, the mapping type of the event is: ' +
                        this.mappingType
                );
                this.dispatchEvent(statuschangeSuccessEvent);
            })
            .catch((error) => {
                this.error = error;
                console.log('request failed');

                const statuschangeFailedEvent = new CustomEvent(
                    'statuschange',
                    {
                        detail: {
                            status: 'failed'
                        }
                    }
                );
                console.log(
                    'when click button, the mapping type of the event is: ' +
                        this.mappingType
                );
                this.dispatchEvent(statuschangeFailedEvent);
            });
    }
}
