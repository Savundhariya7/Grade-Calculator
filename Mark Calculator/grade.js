function cal()
{
 var tam=Number(document.getElementById('tamil').value);
 var eng=Number(document.getElementById('english').value);
 var mat=Number(document.getElementById('maths').value);
 var sci=Number(document.getElementById('science').value);
 var soc=Number(document.getElementById('social').value);
 var a=tam+eng+mat+sci+soc;
 document.getElementById('tot').value=a;
 var avg=a/5;
 document.getElementById('avg').value=avg;
 var c=a/500;
 document.getElementById('per').value=c*100;
 var perc=c*100;
 if(perc>=90)
 {
    document.hetElementById('gra').value="O Grade";
 }
 else if(perc>=85||perc<=89)
 {
    document.getElementById('gra').value="A+ Grade";
 }
 else if( perc>=80||perc<=84)
 {
    document.getElementById('gra').value="A Grade";
 }
 else if(perc>=75||perc<=79)
 {
    document.getElementById('gra').value="B+ Grade";
 }
 else if(perc>=70||perc<=74)
 {
    document.getElementById('gra').value="B Grade";
 }
 else if(perc>=60||perc<=69)
 {
    document.getElementById('gra').value="C+ Grade";
 }
 else if(perc>=50||perc<=59)
 {
    document.getElementById('gra').value="C Grade";
 }
 else if(perc>=35||perc<=49)
 {
    document.getElementById('gra').value=" D Grade";
 }
 else{
    document.getElementById('gra').value="NO Grade";
 }
}

function rest(){
document.getElementById('res').reset();
}
 