'use srtict'
var hourarr = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm']

var cities = [];

function City(cityname, minCustomer, maxCustomer, customrenum, sum, avgCookiesPerCustomer) {
    this.cityname = cityname
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.customrenum = customrenum;
    this.sum = sum;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    cities.push(this);
}
City.prototype.setcustomer = function () {
    var sum = 0;
    for (var i = 0; i < hourarr.length; i++) {

        var M = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
        var multi = Math.floor(M * this.avgCookiesPerCustomer);
        sum = sum + multi;
        this.customrenum.push(multi);
        this.sum = sum
    }
}

var parentElement = document.getElementById('details')
var table = document.createElement('table');
parentElement.appendChild(table);

function headerRow() {

    var tableHeader = document.createElement('tr');
    table.appendChild(tableHeader);
    var x = document.createElement('th');
    tableHeader.appendChild(x);
    x.textContent = 'location/hour';

    for (var i = 0; i < hourarr.length; i++) {
        var th1 = document.createElement('th')
        th1.textContent = hourarr[i];
        tableHeader.appendChild(th1);

    }
    var x1 = document.createElement('th');
    tableHeader.appendChild(x1);
    x1.textContent = 'daily total';

}


City.prototype.render = function () {

    var tr = document.createElement('tr')
    table.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cityname;

    for (var i = 0; i < hourarr.length; i++) {
        var td = document.createElement('td');
        td.textContent = this.customrenum[i];
        tr.appendChild(td);
    }
    var td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.sum;
}

function footerRow() {
    var tableFooter = document.createElement('tr');
    table.appendChild(tableFooter);
    var x3 = document.createElement('td');
    tableFooter.appendChild(x3);
    x3.textContent = 'Totals';

    var totalCookies =0;
    for (var i = 0; i < hourarr.length; i++) {

        var sumHour = 0;
        
        var td = document.createElement('td');
        for (var z = 0; z < 5; z++) {
            sumHour = sumHour + cities[z].customrenum[i];
        }
        totalCookies = totalCookies + sumHour ;
        td.textContent = sumHour + 'cookies' ;
        tableFooter.appendChild(td); 

    }
    var x4 = document.createElement('td');
    tableFooter.appendChild(x4);
    x4.textContent = totalCookies;
}

headerRow();
var seattle = new City('Seattle', 23, 65, [], 0, 6.3);
seattle.setcustomer();
seattle.render();
var Tokyo = new City('Tokyo', 3, 24, [], 0, 1.2);
Tokyo.setcustomer();
Tokyo.render();
var Dubai = new City('Dubai', 11, 38, [], 0, 3.7);
Dubai.setcustomer();
Dubai.render();
var Paris = new City('Paris', 20, 38, [], 0, 2.3);
Paris.setcustomer();
Paris.render();
var Lima = new City('Lima', 2, 16, [], 0, 4.6);
Lima.setcustomer();
Lima.render();
footerRow();
