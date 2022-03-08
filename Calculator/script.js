/*==================================== TITLE ======================================= */

let h1 = document.createElement('h1')
h1.setAttribute('id', 'title')
h1.innerHTML = 'Calculator'
document.body.appendChild(h1)

/*================================== CONTAINER============================================ */

let main = document.createElement('div');
main.setAttribute('id', 'container');
main.classList.add('container');
document.body.appendChild(main);

/* ========================= CALCULATOR DIV================================== */

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

/*==================================== BUTTON CLEAR======================================= */

let buttonClear = document.createElement('button');
buttonClear.setAttribute('id', 'Clear');
buttonClear.setAttribute('onclick', 'Clear()');
buttonClear.innerHTML = 'C';
document.getElementById('calc').appendChild(buttonClear);

/*==================================== BUTTON DEL======================================= */

let buttondel = document.createElement('button');
buttondel.setAttribute('id', 'del');
buttondel.setAttribute('onclick', 'del()');
buttondel.innerHTML = 'Del';
document.getElementById('calc').appendChild(buttondel);

/*==================================== BUTTON MODULE======================================= */

let buttonmodule = document.createElement('button');
buttonmodule.setAttribute('id', 'module');
buttonmodule.setAttribute('onclick', "operator('%')");
buttonmodule.innerHTML = '%';
document.getElementById('calc').appendChild(buttonmodule);

/*==================================== BUTTON DIVISION ======================================= */

let buttondivision = document.createElement('button');
buttondivision.setAttribute('id', 'division');
buttondivision.setAttribute('onclick', "operator('/')");
buttondivision.innerHTML = '/';
document.getElementById('calc').appendChild(buttondivision);

/*==================================== BUTTON 7 ======================================= */

let button7 = document.createElement('button');
button7.setAttribute('id', 'seven');
button7.setAttribute('onclick', "including('7')");
button7.innerHTML = '7';
document.getElementById('calc').appendChild(button7);

/*==================================== BUTTON 8 ======================================= */

let button8 = document.createElement('button');
button8.setAttribute('id', 'eight');
button8.setAttribute('onclick', "including('8')");
button8.innerHTML = '8';
document.getElementById('calc').appendChild(button8);

/*==================================== BUTTON 9 ======================================= */

let button9 = document.createElement('button');
button9.setAttribute('id', 'nine');
button9.setAttribute('onclick', "including('9')");
button9.innerHTML = '9';
document.getElementById('calc').appendChild(button9);

/*==================================== BUTTON MULTIPLY======================================= */

let buttonmul = document.createElement('button');
buttonmul.setAttribute('id', 'mul');
buttonmul.setAttribute('onclick', "operator('*')");
buttonmul.innerHTML = '*';
document.getElementById('calc').appendChild(buttonmul);

/*==================================== BUTTON 4======================================= */

let button4 = document.createElement('button');
button4.setAttribute('id', 'four');
button4.setAttribute('onclick', "including('4')");
button4.innerHTML = '4';
document.getElementById('calc').appendChild(button4);

/*==================================== BUTTON 5 ======================================= */

let button5 = document.createElement('button');
button5.setAttribute('id', 'five');
button5.setAttribute('onclick', "including('5')");
button5.innerHTML = '5';
document.getElementById('calc').appendChild(button5);

/*==================================== BUTTON 6 ======================================= */

let button6 = document.createElement('button');
button6.setAttribute('id', 'six');
button6.setAttribute('onclick', "including('6')");
button6.innerHTML = '6';
document.getElementById('calc').appendChild(button6);

/*==================================== BUTTON SUBTRACT======================================= */

let buttonsub = document.createElement('button');
buttonsub.setAttribute('id', 'subtract');
buttonsub.setAttribute('onclick', "operator('-')");
buttonsub.innerHTML = '-';
document.getElementById('calc').appendChild(buttonsub);

/*==================================== BUTTON 1 ======================================= */

let button1 = document.createElement('button');
button1.setAttribute('id', '1');
button1.setAttribute('onclick', "including('1')");
button1.innerHTML = '1';
document.getElementById('calc').appendChild(button1);

/*==================================== BUTTON 2 ======================================= */

let button2 = document.createElement('button');
button2.setAttribute('id', '2');
button2.setAttribute('onclick', "including('2')");
button2.innerHTML = '2';
document.getElementById('calc').appendChild(button2);

/*==================================== BUTTON 3 ======================================= */

let button3 = document.createElement('button');
button3.setAttribute('id', 'three');
button3.setAttribute('onclick', "including('3')");
button3.innerHTML = '3';
document.getElementById('calc').appendChild(button3);

/*==================================== BUTTON ADDITION ======================================= */

let buttonplus = document.createElement('button');
buttonplus.setAttribute('id', 'add');
buttonplus.setAttribute('onclick', "operator('+')");
buttonplus.innerHTML = '+';
document.getElementById('calc').appendChild(buttonplus);

/*==================================== BUTTON DECIMAL ======================================= */

let buttondot = document.createElement('button');
buttondot.setAttribute('id', 'dot');
buttondot.setAttribute('onclick', "including('.')");
buttondot.innerHTML = '.';
document.getElementById('calc').appendChild(buttondot);

/*==================================== BUTTON ZERO======================================= */

let buttonzero = document.createElement('button');
buttonzero.setAttribute('onclick', "including('0')");
buttonzero.setAttribute('id', '3');
buttonzero.innerHTML = '0'
document.getElementById('calc').appendChild(buttonzero);

/*==================================== BUTTON DOUBLE ZERO ======================================= */

let buttondoublezero = document.createElement('button');
buttondoublezero.setAttribute('id', 'doublezero');
buttondoublezero.setAttribute('onclick', "including('00')");
buttondoublezero.innerHTML = '00';
document.getElementById('calc').appendChild(buttondoublezero);

/*==================================== BUTTON EQUAL TO ======================================= */

let buttonequalto = document.createElement('button');
buttonequalto.setAttribute('id', 'equal');
buttonequalto.setAttribute('onclick', 'equal()');
buttonequalto.innerHTML = '=';
document.getElementById('calc').appendChild(buttonequalto);

/*=========================   DESCTIPTION ABOUT THE TASK  =======================*/

let descrip = document.createElement('p');
descrip.setAttribute('id', 'description');
descrip.innerHTML = 'Here is the App for Perforom Your Logics';
document.body.appendChild(descrip);

/*================================ FUNCTIONALITIES ============================ */

let val1 = val2 = val3 = '';
let opt = '';

function including(str) {
    if (opt == '') {
        document.getElementById('result').value = document.getElementById('result').value + str;
    } else if (opt != '' && val2 == '') {
        document.getElementById('result').value = str;
    } else {
        document.getElementById('result').value = document.getElementById('result').value + str;
    }

    if (opt == '') {
        val1 = document.getElementById('result').value;
    } else {
        val2 = document.getElementById('result').value;
    }
}

/*============================ FUNCTION OPERATORS============================== */

function operator(str) {
    if (opt != '' & val2 != '') {
        equal();
    }
    opt = str;
    document.getElementById('result').value = val1 + str;

}

/*============================= FUNCTION CLEAR====================== */

function Clear() {
    opt = val1 = val2 = '';
    document.getElementById('result').value = '';
}

/*============================= FUNCTION DELETE====================== */

function del() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
    if (opt != '' && val2 == '') {
        opt = '';
    } else if (opt != '' && val2 != '') {
        val2 = val2.slice(0, -1);
    } else {
        val1 = val1.slice(0, -1);
    }
}

/*============================= FUNCTION EQUALTO====================== */

function equal() {
    val1 = eval(val1 + ' ' + opt + ' ' + val2);
    val2 = cal = '';
    document.getElementById('result').value = val1;
}