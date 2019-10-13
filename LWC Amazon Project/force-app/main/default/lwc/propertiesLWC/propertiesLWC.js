import { LightningElement,track, api } from 'lwc';

export default class Properties extends LightningElement {

    @track trackVariable  = "default";
    @api apiVariable  = "default";
    normalVariable = "default";

    handleClick(event) {
        //this.trackVariable = 'track value changed';
        // this.apiVariable = 'api value changed';
        this.normalVariable = 'normal value changed';

    }
}