import { LightningElement, api } from 'lwc';

export default class mappingConfigForm extends LightningElement {
    _pathMapping = [];
    _mappingForms = [];

    @api
    get pathMapping() {
        return this._pathMapping;
    }
    set pathMapping(value) {
        this._pathMapping = value;
    }

    @api
    get mappingForms() {
        return this._mappingForms;
    }
    set mappingForms(value) {
        this._mappingForms = value;
    }

    handleTargetChange(event) {
        var _id = event.target.id;
        _id = parseInt(_id.split('-')[0], 10);
        const pathchangeEvent = new CustomEvent('pathchange', {
            detail: {
                id: _id,
                pathType: 'target',
                path: event.target.value
            }
        });
        this.dispatchEvent(pathchangeEvent);
    }

    handleSourceChange(event) {
        var _id = event.target.id;
        _id = parseInt(_id.split('-')[0], 10);
        const pathchangeEvent = new CustomEvent('pathchange', {
            detail: {
                id: _id,
                pathType: 'source',
                path: event.target.value
            }
        });
        this.dispatchEvent(pathchangeEvent);
    }
}
