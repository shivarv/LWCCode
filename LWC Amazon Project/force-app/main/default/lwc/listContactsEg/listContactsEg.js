import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/LWC_ContactReturnController.getContactList';

export default class ListContactsEg extends LightningElement {
    @wire(getContactList) contacts;
}