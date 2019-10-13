/* eslint-disable eqeqeq */
/* eslint-disable radix */
import { LightningElement,track } from 'lwc';

export default class CalcLWC extends LightningElement {
    firstNumber;
    secondNumber;

    @track finalAnswer;

    handleChange(event) {
        if(event.target.name == "number1") {
            this.firstNumber = parseInt(event.target.value);
        } else {
            this.secondNumber = parseInt(event.target.value);
        }
    }

    calculate(event) {
        if(event.target.name == "+") {
            this.finalAnswer = this.firstNumber + this.secondNumber;
        } else if(event.target.name == "-"){
            this.finalAnswer = this.firstNumber - this.secondNumber;
        } else if(event.target.name == "*") {
            this.finalAnswer = this.firstNumber * this.secondNumber;
        }
    }

}