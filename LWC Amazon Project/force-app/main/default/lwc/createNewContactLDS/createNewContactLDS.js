import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';



export default class CreateNewContactLDS extends LightningElement {
    contactObject = CONTACT_OBJECT;
    myFields = [LASTNAME_FIELD, FIRSTNAME_FIELD, EMAIL_FIELD];

    handleContactCreated(){
        console.log("created contact ");
    }
}