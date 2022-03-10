/*============================= RESPONSIVE TABLE =========================== */

let div = document.createElement('div');
div.classList.add('table-responsive');
div.setAttribute('id', 'tablediv');
document.getElementById('container').appendChild(div);

/*============================== CREATING THE TABLE================================== */

let table = document.createElement('table');
table.setAttribute('id', 'table');
table.classList.add('table', 'table', 'table-dark', 'table-striped');
document.getElementById('tablediv').appendChild(table);

let thead = document.createElement('thead');
thead.setAttribute('id', 'thead');
table.appendChild(thead);

let firstrow = document.createElement('tr');
firstrow.setAttribute('id', 'firstrow');
thead.appendChild(firstrow);

let tablehead = document.createElement('th');
tablehead.innerText = "First Name";
firstrow.appendChild(tablehead);

let head1 = document.createElement('th');
head1.innerText = "Last Name";
firstrow.appendChild(head1);

let head2 = document.createElement('th');
head2.innerText = "Address";
firstrow.appendChild(head2);

let head3 = document.createElement('th');
head3.innerText = "PinCode";
firstrow.appendChild(head3);

let head4 = document.createElement('th');
head4.innerText = "State";
firstrow.appendChild(head4);

let head5 = document.createElement('th');
head5.innerText = "Country";
firstrow.appendChild(head5);

let head6 = document.createElement('th');
head6.innerText = "Gender";
firstrow.appendChild(head6);

let head7 = document.createElement('th');
head7.innerText = "Food";
firstrow.appendChild(head7);

/*================================ APPEND THE USER INPUTS TO THE TABLE===================== */

function append() {

    let radiobtn = document.getElementsByName('gender');

    for (i = 0; i < radiobtn.length; i++) {
        if (radiobtn[i].checked) {
            var gen = radiobtn[i].value;
            console.log(gen);
        }
    }

    let rowone = document.createElement('tr');
    document.getElementById('table').appendChild(rowone);
    let tdata1 = document.createElement('td');
    tdata1.innerHTML = document.getElementById('first-name').value;
    rowone.appendChild(tdata1);

    let tdata2 = document.createElement('td');
    tdata2.innerHTML = document.getElementById('last-name').value;
    rowone.appendChild(tdata2);

    let tdata3 = document.createElement('td');
    tdata3.innerHTML = document.getElementById('address').value;
    rowone.appendChild(tdata3);

    let tdata4 = document.createElement('td');
    tdata4.innerHTML = document.getElementById('pincode').value;
    rowone.appendChild(tdata4);

    let tdata5 = document.createElement('td');
    tdata5.innerHTML = document.getElementById('state').value;
    rowone.appendChild(tdata5);

    let tdata6 = document.createElement('td');
    tdata6.innerHTML = document.getElementById('country').value;
    rowone.appendChild(tdata6);

    let tdata7 = document.createElement('td');
    tdata7.innerHTML = gen;
    rowone.appendChild(tdata7);

    let tdata8 = document.createElement('td');
    let options = document.getElementById('food');

    for (i = 0; i < options.length; i++) {
        if (options[i].selected) {
            tdata8.innerHTML += `${options[i].value}`;
        }
    }
    rowone.appendChild(tdata8);
}