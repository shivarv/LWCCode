import { LightningElement } from 'lwc';

export default class EventPropagationEg extends LightningElement {
    
    handleNotify(event) {
        console.log("handled event in parent direct handler");
    }

    handleDivBubbleNotify(event) {
        console.log("handled event in parent div bubble handler");
    }


}