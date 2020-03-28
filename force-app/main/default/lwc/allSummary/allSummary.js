/* eslint-disable no-console */
/* eslint-disable no-alert */

import { LightningElement ,track} from 'lwc';

export default class AllSummary extends LightningElement {


    @track Visible1 = true;
    @track Visible = false;
    @track Visible2 = false;
    

    handleClick() {
        this.Visible = true;

        this.Visible1 = false;
        //alert('working');
        //console.log("working");
    }
    
    handleClick1() {
        this.Visible = false;
        this.Visible1 = false;
        this.Visible2 = true;
       
        //alert('working1');
        //console.log("working");
    }

    handleClick12() {

        this.Visible = false;
        this.Visible1 = true;
        //this.Visible2 = true;
        //alert('working2');

    }


    previousHandler2() {
        this.Visible = true;
        this.Visible1 = false;
        this.Visible2 = false;
        //alert('working3');

    }
}