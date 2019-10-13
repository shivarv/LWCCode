/* eslint-disable no-unused-vars */
import { LightningElement, track } from 'lwc';
import {calculateMonthlyPayment, getTermOptions} from 'c/utils';


export default class SharingJsCode extends LightningElement {
    @track demVar;

    bClick(event) {
        this.demVar = calculateMonthlyPayment(5, 5 , 5);
    }
}