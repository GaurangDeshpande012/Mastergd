import { LightningElement ,track} from 'lwc';

export default class SimpleCalculator extends LightningElement {
@track currentResult;

@track previousResultlst=[];
@track showPreviousResult=false;
FirstNumber;
SecondNumber;

NumberchangeHandler(event)
{
const  inputBoxName= event.target.name;
if(inputBoxName==='FirstNumber')
{
this.FirstNumber=event.target.value;
}
else if(inputBoxName==='SecondNumber')
{
    this.SecondNumber=event.target.value;
}

}
ADDHandler()
{
const firstN =parseInt(this.FirstNumber);
const secondN=parseInt(this.SecondNumber);

//this.currentResult='Result of '+firstN+'+'+secondN+'is'  +(firstN+secondN);
//this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
this.previousResultlst.push(this.currentResult);
}

SUBHandler()
{
    const firstN =parseInt(this.FirstNumber);
    const secondN=parseInt(this.SecondNumber);
     //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
     this.currentResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;
     this.previousResultlst.push(this.currentResult);
}
MULHandler()
{
    const firstN =parseInt(this.FirstNumber);
    const secondN=parseInt(this.SecondNumber);
     //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
     this.currentResult = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;
     this.previousResultlst.push(this.currentResult);
}
DIVHandler()
{
    const firstN =parseInt(this.FirstNumber);
    const secondN=parseInt(this.SecondNumber);
     //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
     this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
     this.previousResultlst.push(this.currentResult);
}
showPreviousResultToggle(event)
{
this.showPreviousResult=event.target.checked;

}

}