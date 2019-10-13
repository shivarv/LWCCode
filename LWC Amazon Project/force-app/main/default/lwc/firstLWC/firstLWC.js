import { LightningElement, track } from 'lwc';

export default class FirstLWC extends LightningElement {
    @track dynamicData;

    changeInputHandler(event) {
        this.dynamicData = event.target.value;
    }

}