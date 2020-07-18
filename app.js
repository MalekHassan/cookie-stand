
'use srtict'
var hourarr = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm']

function City(cityname, minCustomer, maxCustomer, customrenum, sum, avgCookiesPerCustomer) {
    this.cityname = cityname
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.customrenum = customrenum;
    this.sum = sum;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
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
    console.log(this.customrenum);
    console.log('sum=' + sum)
}

var parentElement = document.getElementById('details')
var table = document.createElement('table');
parentElement.appendChild(table);

function headerRow() {

    var tableHeader = document.createElement('hr');
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

    for (var i = 0; i < hourarr.length; i++) {
        var td = document.createElement('td');
        td.textContent = this.customrenum[i];
        tr.appendChild(td);
    }

    //     var tr = document.createElement('tr');
    //     var th3=document.createElement('th');
    //     th3.textContent=this.cityname;
    //     table.appendChild(th3);
    //         for (var i=0;i<hourarr.length;i++){
    //             var th2= document.createElement('th');
    //             console.log(this.customrenum[i]);
    //         th2.textContent = this.customrenum[i];
    //         tr.append(th2);
    // }
    //     tr.append(th3);
    //     for (var i=0;i<hourarr.length;i++){
    //         var th2= document.createElement('th');
    //         console.log(this.customrenum[i]);
    //     th2.textContent = this.customrenum[i];
    //     tr.append(th2);
    //     }
    //     var th3 = document.createElement('th');
    //     th3.textContent = 'Daily Location Total';
    //     tr.appendChild(th3);
    //     var th3 = document.createElement('th');
    //     th3.textContent = this.sum;
    //     tr.append(th3);
    //     table.appendChild(tr);
    //     table.appendChild(tr);
    //     article.appendChild(table);


// var Tokyo = new City('Tokyo', 3,24,[],0,1.2);
// Tokyo.setcustomer();
// Tokyo.render();
// var Dubai = new City('Dubai', 11,38,[],0,3.7);
// Dubai.setcustomer();
// Dubai.render();
// var Paris = new City('Paris', 20,38,[],0,2.3);
// Paris.setcustomer();
// Paris.render();
// var Lima = new City('Lima', 2,16,[],0,4.6);
// Lima.setcustomer();
// Lima.render();

// var seattle = {
//     Name1: 'Seattle',
//     customer: [],
//     minCustomer: 23,
//     maxCustomer: 65,
//     minHour: 0,
//     maxHour: 20,
//     avgCookiesPerCustomer: 1.2,
//     setcustomre: function () {
//         for (var i=0;i<14;i++)
//         this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
//     },

//     render: function () {
//         var parentElement = document.getElementById('details')
//         var article = document.createElement('article');
//         parentElement.appendChild(article);
//         var cityName = document.createElement('h3');
//         cityName.textContent = this.Name1;
//         article.appendChild(cityName);
//         var ul=document.createElement('ul');
//         article.appendChild(ul);
//         for (var hour = 6; hour < 20; hour++) {
//             if (hour < 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
//                 article.appendChild(workhour); 
//             }
//             if (hour === 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour);
//             }

//             if (hour > 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour); 
//             }
//         }
//         var sum=0;
//         for (var k=0;k<this.customer.length;k++){
//            sum=sum+this.customer[k];
//         }  
//         var Total=document.createElement('pre');
//         Total.textContent='Total'+'     '+sum;
//         article.appendChild(Total);
//     }

// };
// var Tokyo = {
//     Name1: 'Tokyo',
//     customer: [], 
//     minCustomer: 3,
//     maxCustomer: 24,
//     minHour: 0,
//     maxHour: 20,
//     avgCookiesPerCustomer: 1.2,
//     setcustomre: function () {
//         for (var i=0;i<14;i++)
//         this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
//     },

//     render: function () {
//         var parentElement = document.getElementById('details')
//         var article = document.createElement('article');
//         parentElement.appendChild(article);
//         var cityName = document.createElement('h3');
//         cityName.textContent = this.Name1;
//         article.appendChild(cityName);
//         var ul=document.createElement('ul');
//         article.appendChild(ul);
//         for (var hour = 6; hour < 20; hour++) {
//             if (hour < 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
//                 article.appendChild(workhour); 
//             }
//             if (hour === 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour);
//             }

//             if (hour > 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour); 
//             }
//         }
//         var sum=0;
//         for (var k=0;k<this.customer.length;k++){
//            sum=sum+this.customer[k];
//         }  
//         var Total=document.createElement('pre');
//         Total.textContent='Total'+'     '+sum;
//         article.appendChild(Total);
//     }

// };
// var Dubai = {
//     Name1: 'Dubai',
//     customer: [],
//     minCustomer: 11,
//     maxCustomer: 38,
//     minHour: 0,
//     maxHour: 20,
//     avgCookiesPerCustomer: 3.7,
//     setcustomre: function () {
//         for (var i=0;i<14;i++)
//         this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
//     },

//     render: function () {
//         var parentElement = document.getElementById('details')
//         var article = document.createElement('article');
//         parentElement.appendChild(article);
//         var cityName = document.createElement('h3');
//         cityName.textContent = this.Name1;
//         article.appendChild(cityName);
//         var ul=document.createElement('ul');
//         article.appendChild(ul);
//         for (var hour = 6; hour < 20; hour++) {
//             if (hour < 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
//                 article.appendChild(workhour); 
//             }
//             if (hour === 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour);
//             }

//             if (hour > 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour); 
//             }
//         }
//         var sum=0;
//         for (var k=0;k<this.customer.length;k++){
//            sum=sum+this.customer[k];
//         }  
//         var Total=document.createElement('pre');
//         Total.textContent='Total'+'     '+sum;
//         article.appendChild(Total);
//     }

// };
// var Paris = {
//     Name1: 'Paris',
//     customer: [],
//     minCustomer: 20	,
//     maxCustomer: 38,
//     minHour: 0,
//     maxHour: 20,
//     avgCookiesPerCustomer: 2.3,
//     setcustomre: function () {
//         for (var i=0;i<14;i++)
//         this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
//     },

//     render: function () {
//         var parentElement = document.getElementById('details')
//         var article = document.createElement('article');
//         parentElement.appendChild(article);
//         var cityName = document.createElement('h3');
//         cityName.textContent = this.Name1;
//         article.appendChild(cityName);
//         var ul=document.createElement('ul');
//         article.appendChild(ul);
//         for (var hour = 6; hour < 20; hour++) {
//             if (hour < 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
//                 article.appendChild(workhour); 
//             }
//             if (hour === 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour);
//             }

//             if (hour > 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour); 
//             }
//         }
//         var sum=0;
//         for (var k=0;k<this.customer.length;k++){
//            sum=sum+this.customer[k];
//         }  
//         var Total=document.createElement('pre');
//         Total.textContent='Total'+'     '+sum;
//         article.appendChild(Total);
//     }

// };

// var Lima = {
//     Name1: 'Lima',
//     customer: [],
//     minCustomer: 2,
//     maxCustomer: 16	,
//     minHour: 0,
//     maxHour: 20,
//     avgCookiesPerCustomer: 4.6,
//     setcustomre: function () {
//         for (var i=0;i<14;i++)
//         this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
//     },

//     render: function () {
//         var parentElement = document.getElementById('details')
//         var article = document.createElement('article');
//         parentElement.appendChild(article);
//         var cityName = document.createElement('h3');
//         cityName.textContent = this.Name1;
//         article.appendChild(cityName);
//         var ul=document.createElement('ul');
//         article.appendChild(ul);
//         for (var hour = 6; hour < 20; hour++) {
//             if (hour < 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
//                 article.appendChild(workhour); 
//             }
//             if (hour === 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour);
//             }

//             if (hour > 12) {
//                 var workhour = document.createElement('li');
//                 workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
//                 article.appendChild(workhour); 
//             }
//         }
//         var sum=0;
//         for (var k=0;k<this.customer.length;k++){
//            sum=sum+this.customer[k];
//         }  
//         var Total=document.createElement('pre');
//         Total.textContent='Total'+'     '+sum;
//         article.appendChild(Total);
//     }

// };


// function generateRandomCustomer(max, min) {

//     var M = Math.floor(Math.random() * (max - min)) + min;
//     console.log(M);
//     return M;
// }
// seattle.setcustomre();
// seattle.render();
// Tokyo.setcustomre();
// Tokyo.render();
// Dubai.setcustomre();
// Dubai.render();
// Paris.setcustomre();
// Paris.render();
// Lima.setcustomre();
// Lima.render();

'use srtict'
var hourarr = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm']

var cities = [];

function City(cityname, minCustomer, maxCustomer, customrenum, sum, avgCookiesPerCustomer) {

this.cities=[]
function City(cityname, minCustomer, maxCustomer, avgCookiesPerCustomer) {
    
    var customrenum=[]
    var sum=0

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

table.classList.add('detailsTable')

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

        for (var z = 0; z <cities.length ; z++) {
            sumHour = sumHour + cities[z].customrenum[i];
        }
        
        totalCookies = totalCookies + sumHour ;
        td.textContent = sumHour  ;
        tableFooter.appendChild(td); 

    }
    console.log(cities)
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
var seattle = new City('Seattle', 23, 65,6.3);
seattle.setcustomer();
seattle.render();
var Tokyo = new City('Tokyo', 3, 24,1.2);
Tokyo.setcustomer();
Tokyo.render();
var Dubai = new City('Dubai', 11, 38,3.7);
Dubai.setcustomer();
Dubai.render();
var Paris = new City('Paris', 20, 38,2.3);
Paris.setcustomer();
Paris.render();
var Lima = new City('Lima', 2, 16,4.6);
Lima.setcustomer();
Lima.render();
footerRow();

var NewCity=document.getElementById("NewCity1")
NewCity.addEventListener('submit',function(){
    event.preventDefault();
    var cityname=event.target.cityName.value;
    var minCustomer=parseInt( event.target.Min.value);
    console.log(typeof minCustomer)
    var maxCustomer=parseInt(event.target.Max.value);
    var  avgCookiesPerCustomer=parseInt(event.target.Average.value);

    var newCityValue=new City(cityname,minCustomer,maxCustomer, avgCookiesPerCustomer)
    console.log(newCityValue.minCustomer)
    table.deleteRow(table.rows.length - 1)
    newCityValue.setcustomer(NewCity.minCustomer,NewCity.maxCustomer);
    newCityValue.render();
    footerRow();


})