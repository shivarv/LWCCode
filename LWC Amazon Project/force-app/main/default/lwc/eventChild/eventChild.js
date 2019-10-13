import { LightningElement } from 'lwc';

export default class EventChild extends LightningElement {

    constructor() {
        super();
        this.template.addEventListener('notify', this.notifyHandlerButtonHandler.bind(this));
      }

    /*
    connectedCallback(){
        this.dispatchEvent(
            // Default values for bubbles and composed are false.
            new CustomEvent('notify', { bubbles: true })
        );
    }
    */

    fireEvent() {
        this.dispatchEvent(
            // Default values for bubbles and composed are false.
            new CustomEvent('notify', { bubbles : true , composed : true})
        );
    
    }

    notifyHandlerChildDivHandler() {
        console.log("in child div event handler ");
    }

    notifyHandlerButtonHandler() {
        console.log("in child notifyHandlerButtonHandler ");
    }

}