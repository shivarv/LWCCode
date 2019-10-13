/* eslint-disable no-unused-vars */
import { LightningElement, track } from 'lwc';

export default class ContainerDemo extends LightningElement {
    @track addOneMore = false;
    
    handleClick() {
        this.addOneMore = true;
    }

}