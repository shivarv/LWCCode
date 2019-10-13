import { LightningElement,track } from 'lwc';

export default class CheckBoxEg extends LightningElement {
    @track isChecked = false;
    
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id2: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
    
    handleChange(event) {
        this.isChecked = event.target.checked;
    }
    
}