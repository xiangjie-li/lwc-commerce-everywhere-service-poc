import { LightningElement, api } from 'lwc';

export default class routingStatus extends LightningElement {
    @api status;
    @api configName;

    @api
    get isWaiting() {
        return this.status === 'waiting';
    }

    get isRunning() {
        return this.status === 'running';
    }

    get isSuccess() {
        return this.status === 'success';
    }

    get isFailed() {
        return this.status === 'failed';
    }
}
