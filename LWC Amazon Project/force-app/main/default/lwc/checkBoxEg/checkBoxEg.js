import { LightningElement,track } from 'lwc';

export default class CheckBoxEg extends LightningElement {
    @track isChecked = false;
    
    handleChange(event) {
        this.isChecked = event.target.checked;
    }
    
}