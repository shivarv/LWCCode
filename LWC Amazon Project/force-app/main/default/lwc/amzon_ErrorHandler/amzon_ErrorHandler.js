import { LightningElement, track } from 'lwc';

export default class Amzon_ErrorHandler extends LightningElement {
    @track error;
    @track stack;
    errorCallback(error, stack) {
        this.error = error;
        this.stack = stack;
    }

}