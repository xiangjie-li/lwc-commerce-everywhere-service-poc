import { LightningElement } from 'lwc';

export default class mappingConfig extends LightningElement {
    MappingType = '';
    configName;
    name;
    pathMapping = [];

    lastMappingFormId = -1;

    mappingForms = [
        // { id: 1, description: 'Explore recipes', priority: true },
        // { id: 2, description: 'Install Ebikes sample app', priority: false }
    ];

    // @api
    // get mappings(){
    //     return this.mappings;
    // }

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleConfigNameChange(event) {
        this.configName = event.target.value;
    }

    handleNavigate() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }

    handleMappingTypeChange(event) {
        this.mappingType = event.target.value;
    }

    // @api
    // get isMappingEcom2CDM() {
    //     return this.selectedMapping === 'ecom2CDM';
    // }

    // get isMappingCDM2Google() {
    //     return this.selectedMapping === 'CDM2Google';
    // }

    handleNewMappingForm() {
        console.log('click creating new mapping form');
        this.lastMappingFormId = this.lastMappingFormId + 1;
        // Using immutable data structures. Creating a new array with old and new items instead of mutating the existing array with push()
        this.mappingForms = [
            ...this.mappingForms,
            {
                id: this.lastMappingFormId
            }
        ];
        this.pathMapping = [
            ...this.pathMapping,
            {
                target: '',
                source: ''
            }
        ];
        console.log('current path Mapping length: ' + this.pathMapping.length);
    }

    handlePathchange(event) {
        var id = event.detail.id;
        var type = event.detail.pathType;

        console.log('receive path change event!!!');

        if (type === 'target') {
            this.pathMapping[id].target = event.detail.path;
        } else {
            this.pathMapping[id].source = event.detail.path;
        }
        console.log(
            'Path Mapping of index ' +
                id +
                ' : target ' +
                this.pathMapping[id].target +
                ' source ' +
                this.pathMapping[id].source
        );
    }

    handleBack() {
        console.log('get click!!!');
        console.log('get back click!!!!');
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }

    handleSave() {
        var payload;

        if (this.mappingType === 'producer2CDM') {
            payload = {
                userId: 'jack',
                producerName: this.name,
                configName: this.configName,
                config: this.pathMapping
            };
            fetch('http://localhost:8081/producer_mapper/config/' + this.name, {
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
        } else {
            payload = {
                userId: 'jack',
                consumerName: this.name,
                configName: this.configName,
                config: this.pathMapping
            };

            fetch('http://localhost:8081/consumer_mapper/config/' + this.name, {
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
    }
}
