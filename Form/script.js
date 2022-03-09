let append = document.createElement('p');
append.setAttribute('id', 'add');
document.getElementById('box').appendChild(append);


let sendData = () => {
    let data = document.getElementById('data').value;
    let data1 = document.getElementById('data').value;
    let data2 = document.getElementById('data').value;
    let data3 = document.getElementById('data').value;
    let data4 = document.getElementById('data').value;
    let data5 = document.getElementById('data').value;
    let data6 = document.getElementById('data').value;
    let data7 = document.getElementById('data').value;
    let data8 = document.getElementById('data').value;

    let para = document.createElement('p');
    para.innerHTML = data;
    let para1 = document.createElement('p');
    para1.innerHTML = data1;
    let para2 = document.createElement('p');
    para2.innerHTML = data2;
    let para3 = document.createElement('p');
    para3.innerHTML = data3;
    let para4 = document.createElement('p');
    para4.innerHTML = data4;
    let para5 = document.createElement('p');
    para5.innerHTML = data5;
    let para6 = document.createElement('p');
    para6.innerHTML = data6;
    let para7 = document.createElement('p');
    para7.innerHTML = data7;
    let para8 = document.createElement('p');
    para8.innerHTML = data8;

    document.getElementById('add').appendChild('para');
    document.getElementById('add').appendChild('para1');
    document.getElementById('add').appendChild('para2');
    document.getElementById('add').appendChild('para3');
    document.getElementById('add').appendChild('para4');
    document.getElementById('add').appendChild('para5');
    document.getElementById('add').appendChild('para6');
    document.getElementById('add').appendChild('para7');
    document.getElementById('add').appendChild('para8');
}