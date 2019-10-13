/* eslint-disable no-unused-vars */
import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api showFooter = false;
    handleClick(event) {
        this.showFooter = true;
    }

}