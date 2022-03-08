/*================================== CONTAINER============================================ */

let main = document.createElement('div');
main.setAttribute('id', 'container');
main.classList.add('container');
document.body.appendChild(main);

/* =========================CALCULATOR DIV================================== */

let calcdiv = document.createElement('div');
calcdiv.setAttribute('id', 'calc');
calcdiv.classList.add('calc');
document.getElementById('container').appendChild(calcdiv);

/*===================================== INPUT BOX========================================= */

let inpbox = document.createElement('input');
inpbox.setAttribute('id', 'result');
inpbox.setAttribute('type', 'text');
inpbox.setAttribute('placeholder', '0');
inpbox.setAttribute('onkeypress', 'typing()');
document.getElementById('calc').appendChild(inpbox);

/*==================================== BUTTONS======================================= */

let buttonreset = document.createElement('button');
buttonreset.setAttribute('id', 'reset');
buttonreset.setAttribute('onclick', 'reset()');
buttonreset.innerHTML = 'C';
document.getElementById('calc').appendChild(buttonreset);

let buttondel = document.createElement('button');
buttondel.setAttribute('id', 'del');
buttondel.setAttribute('onclick', 'del()');
buttondel.innerHTML = 'Del';
document.getElementById('calc').appendChild(buttondel);

let buttonmodule = document.createElement('button');
buttonmodule.setAttribute('id', 'module');
buttonmodule.setAttribute('onclick', "operator('%')");
buttonmodule.innerHTML = '%';
document.getElementById('calc').appendChild(buttonmodule);

let buttondivision = document.createElement('button');
buttondivision.setAttribute('id', 'division');
buttondivision.setAttribute('onclick', "operator('/')");
buttondivision.innerHTML = '/';
document.getElementById('calc').appendChild(buttondivision);

let button7 = document.createElement('button');
button7.setAttribute('id', 'seven');
button7.setAttribute('onclick',  "including('7')");
button7.innerHTML = '7';
document.getElementById('calc').appendChild(button7);

let button8 = document.createElement('button');
button8.setAttribute('id', 'eight');
button8.setAttribute('onclick',  "including('8')");
button8.innerHTML = '8';
document.getElementById('calc').appendChild(button8);

let button9 = document.createElement('button');
button9.setAttribute('id', 'nine');
button9.setAttribute('onclick',  "including('9')");
button9.innerHTML = '9';
document.getElementById('calc').appendChild(button9);

let buttonmul = document.createElement('button');
buttonmul.setAttribute('id', 'mul');
buttonmul.setAttribute('onclick', "operator('*')");
buttonmul.innerHTML = '*';
document.getElementById('calc').appendChild(buttonmul);

let button4 = document.createElement('button');
button4.setAttribute('id', 'four');
button4.setAttribute('onclick',  "including('4')");
button4.innerHTML = '4';
document.getElementById('calc').appendChild(button4);

let button5 = document.createElement('button');
button5.setAttribute('id', 'five');
button5.setAttribute('onclick',  "including('5')");
button5.innerHTML = '5';
document.getElementById('calc').appendChild(button5);

let button6 = document.createElement('button');
button6.setAttribute('id', 'six');
button6.setAttribute('onclick',  "including('6')");
button6.innerHTML = '6';
document.getElementById('calc').appendChild(button6);

let buttonsub = document.createElement('button');
buttonsub.setAttribute('id', 'sub');
buttonsub.setAttribute('onclick', "operator('-')");
buttonsub.innerHTML = '-';
document.getElementById('calc').appendChild(buttonsub);

let button1 = document.createElement('button');
button1.setAttribute('id', 'one');
button1.setAttribute('onclick',  "including('1')");
button1.innerHTML = '1';
document.getElementById('calc').appendChild(button1);

let button2 = document.createElement('button');
button2.setAttribute('id', 'two');
button2.setAttribute('onclick',  "including('2')");
button2.innerHTML = '2';
document.getElementById('calc').appendChild(button2);

let button3 = document.createElement('button');
button3.setAttribute('id', 'three');
button3.setAttribute('onclick',  "including('3')");
button3.innerHTML = '3';
document.getElementById('calc').appendChild(button3);

let buttonplus = document.createElement('button');
buttonplus.setAttribute('id', 'seven');
buttonplus.setAttribute('onclick', "operator('+')");
buttonplus.innerHTML = '+';
document.getElementById('calc').appendChild(buttonplus);

let buttondot = document.createElement('button');
buttondot.setAttribute('id', 'dot');
buttondot.setAttribute('onclick',  "including('.')");
buttondot.innerHTML = '.';
document.getElementById('calc').appendChild(buttondot);

let buttonzero = document.createElement('button');
buttonzero.setAttribute('onclick',  "including('0')");
buttonzero.setAttribute('id', 'zero');
buttonzero.innerHTML = '0'
document.getElementById('calc').appendChild(buttonzero);

let buttondoublezero = document.createElement('button');
buttondoublezero.setAttribute('id', 'doublezero');
buttondoublezero.setAttribute('onclick', "including('00')");
buttondoublezero.innerHTML = '00';
document.getElementById('calc').appendChild(buttondoublezero);

let buttonequalto = document.createElement('button');
buttonequalto.setAttribute('id', 'equal');
buttonequalto.setAttribute('onclick', 'equal()');
buttonequalto.innerHTML = '=';
document.getElementById('calc').appendChild(buttonequalto);



/*================================ FUNCTIONALITIES============================ */
let val1=val2=val3='';
let opt='';
function including(str) {
    if(val1==''&val2==''){
        document.getElementById('result').value = str;    
    }else{
    document.getElementById('result').value = document.getElementById('result').value +str;        
    }
    if(opt==''){
        val1=val1+str;
    }else{
    val2=val2+str;
}
}
function operator(str){
    if(opt!=''&val2!=''){
        equal();
    }
    opt=str;
    document.getElementById('result').value = val1+str;

}
function reset(){
    opt=val1=val2='';
    document.getElementById('result').value = '';

}
function del() {
document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
if(opt!=''&&val2==''){
    opt='';
}else if(opt!=''&&val2!=''){
    val2=val2.slice(0, -1);
}else{
    val1=val1.slice(0, -1);
}
}
function equal(){
    try{
    val1=eval(val1+' '+opt+' '+val2);
    val2=cal='';
    document.getElementById('result').value = val1;
    }catch(e){
        document.getElementById('result').value = e;
        val1=val2=cal='';
    }
}