import { LightningElement } from 'lwc';

export default class Container extends LightningElement {
    //container.js
    handleSlotChange (event) {
        console.log("New slotted content has been added or removed!");
    }
}