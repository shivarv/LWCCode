import { LightningElement, api } from 'lwc';

export default class ViewRecordLDS extends LightningElement {
    @api recordId;

    constructor() {
        super();
        this.recordId = '0036D00000AcNjnQAF';
    }
}