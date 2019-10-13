/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
import { LightningElement, track } from 'lwc';

export default class Sudoku_StartPage extends LightningElement {
   
    @track numbersList;
    @track isNumberBarAvailable = false;
    selectedElement;
    elementArray;
    isStart = false;
    selectedHtmlButtonRef;
    maxRowValue = 4;
    connectedCallback() {
        console.log("in connectedCallback Method");
        if(this.isStart == true) {
            return;
        }
        this.isStart = true;
        this.setDefaultValues();
    }
    setDefaultValues() {
        console.log("in setDefaultValues Method");
        var details = [];
        var countNumber = [];
        for(var i = 0; i < 16; i++) {
            countNumber.push('box'+i);
        }
        details.push({"rowKey" : 1, "rowValue" :[
                {"id":1, "val" : 1, "isNotZero": true , "isZero" : false, isFixed : true},
                {"id":2, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false},
                {"id":3, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false}, 
                {"id":4, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false}]});
        details.push({"rowKey" : 2, "rowValue" : [
                {"id":5, "val" : 3, "isNotZero": true, "isZero" : false, isFixed : true},
                {"id":6, "val" : 2, "isNotZero": true, "isZero" : false, isFixed : true},
                {"id":7, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false}, 
                {"id": 8, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false}]});
        details.push({"rowKey" : 3, "rowValue" :[ 
                {"id":9, "val" : 1, "isNotZero": true, "isZero" : false, isFixed : true}, 
                {"id":10, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false},
                {"id":10, "val" : 4, "isNotZero": true, "isZero" : false, isFixed : true},
                {"id": 12, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false}]});
        details.push({"rowKey" : 4, "rowValue" :[
                {"id":13, "val" : 1, "isNotZero": true, "isZero" : false, isFixed : true},
                {"id":14, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false},
                {"id":15, "val" : 0, "isNotZero": false, "isZero" : true, isFixed : false}, 
                {"id": 16, "val" : 1, "isNotZero" : true, "isZero" : false, isFixed : true}]});
        this.numbersList = details;
        console.log(this.numbersList.length);
        console.log(this.numbersList[0].length);
        console.log(" numbers List "+ JSON.stringify(this.numbersList));
    }

    selectedItem(event){
        var clicedEle = event.target;
        var clickedEleId = event.target.name;
        console.log(clickedEleId);
        var foundEle ;
        var details = this.numbersList;
        for(var i in details) {
            foundEle = details[i].rowValue.find(function(element) {
                return element.id === clickedEleId;
            });
            if(foundEle) {
                this.elementArray = details[i];
                console.log(JSON.stringify(foundEle));
                console.log(JSON.stringify(this.elementArray));
                break;
            }    
        }
        if(!foundEle) {
            foundEle = "";
        }
        this.selectedElement = foundEle;
        this.selectedHtmlButtonRef = event.target;
        this.isNumberBarAvailable = true;
    }
   
    handleNumberEntered(event) {
        /*
        var userInput = event.target.label;
        var rowKey = this.elementArray.rowKey;
        var wholeNewNumberList = [];
        var index = rowKey - 1;
        var newValues = [];
        this.maxRowValue++;

        for(var i in this.elementArray.rowValue) {
            var inputVal = this.elementArray.rowValue[i].val;
            if(this.elementArray.rowValue[i].id == this.selectedElement.id) {
                inputVal = userInput;
            } 
            newValues.push({"id" : this.elementArray.rowValue[i].id,
                            "val" : inputVal,
                            "isNotZero" : this.elementArray.rowValue[i].isNotZero,
                            "isZero" : this.elementArray.rowValue[i].isZero,
                            "isFixed" : this.elementArray.rowValue[i].isFixed,
            });
        }
        console.log(" new Value "+ JSON.stringify(newValues));
        for(var i in this.numberList) {
            if(this.numberList[i].rowKey == rowKey) {
                wholeNewNumberList.push({"rowKey" : this.maxRowValue, "rowValue" : newValues});
            } else {
                wholeNewNumberList.push(this.numberList[i]);
            }
        }
       // var removed = this.numbersList.splice(rowKey - 1, 1);
        this.numberList = null;
    //    this.numberList = wholeNewNumberList;
      //  this.numbersList.splice(rowKey - 1, 0,{"rowKey" : this.maxRowValue , "rowValue":newValues});
        console.log(JSON.stringify(this.numbersList));
        */

        
        console.log("in handleNumberEntered method "+event.target.label);
        var userInput = event.target.label;
        this.selectedElement.val = userInput;
        var buttonList = this.template.querySelectorAll('.button-minSize');
        for(var i = 0; i < buttonList.length; i++) {
            if(buttonList[i] === this.selectedHtmlButtonRef) {
                console.log("reference matched "+ buttonList[i].name);
                buttonList[i].label = userInput;
                break;
            }
            console.log(JSON.stringify(buttonList[i]));
        }
        console.log(buttonList.length);

        this.isNumberBarAvailable = false; 
    }
}