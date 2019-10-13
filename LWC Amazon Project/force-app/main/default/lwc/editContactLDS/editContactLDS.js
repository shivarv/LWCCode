import { LightningElement, api } from 'lwc';

export default class EditContactLDS extends LightningElement {
    @api recordId;
    @api objectApiName;
    constructor() {
        super();
        this.recordId = '0036D00000AcNjnQAF';
        this.objectApiName = 'Contact';
    }
}