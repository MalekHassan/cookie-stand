'use srtict'
var seattle = {
    Name1: 'Seattle',
    customer: [],
    minCustomer: 23,
    maxCustomer: 65,
    minHour: 0,
    maxHour: 20,
    avgCookiesPerCustomer: 6.3,
    setcustomre: function () {
        for (var i=0;i<14;i++)
        this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
    },

    render: function () {
        var parentElement = document.getElementById('details')
        var article = document.createElement('article');
        parentElement.appendChild(article);
        var cityName = document.createElement('h3');
        cityName.textContent = this.Name1;
        article.appendChild(cityName);
        var ul=document.createElement('ul');
        article.appendChild(ul);
        for (var hour = 6; hour < 20; hour++) {
            if (hour < 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
                article.appendChild(workhour); 
            }
            if (hour === 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour);
            }

            if (hour > 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour); 
            }
        }
        var sum=0;
        for (var k=0;k<this.customer.length;k++){
           sum=sum+this.customer[k];
        }  
        var Total=document.createElement('pre');
        Total.textContent='Total'+'     '+sum;
        article.appendChild(Total);
    }
    
};
var Tokyo = {
    Name1: 'Tokyo',
    customer: [],
    minCustomer: 3,
    maxCustomer: 24,
    minHour: 0,
    maxHour: 20,
    avgCookiesPerCustomer: 6.3,
    setcustomre: function () {
        for (var i=0;i<14;i++)
        this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
    },

    render: function () {
        var parentElement = document.getElementById('details')
        var article = document.createElement('article');
        parentElement.appendChild(article);
        var cityName = document.createElement('h3');
        cityName.textContent = this.Name1;
        article.appendChild(cityName);
        var ul=document.createElement('ul');
        article.appendChild(ul);
        for (var hour = 6; hour < 20; hour++) {
            if (hour < 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
                article.appendChild(workhour); 
            }
            if (hour === 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour);
            }

            if (hour > 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour); 
            }
        }
        var sum=0;
        for (var k=0;k<this.customer.length;k++){
           sum=sum+this.customer[k];
        }  
        var Total=document.createElement('pre');
        Total.textContent='Total'+'     '+sum;
        article.appendChild(Total);
    }
    
};
var Dubai = {
    Name1: 'Dubai',
    customer: [],
    minCustomer: 11,
    maxCustomer: 38,
    minHour: 0,
    maxHour: 20,
    avgCookiesPerCustomer: 6.3,
    setcustomre: function () {
        for (var i=0;i<14;i++)
        this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
    },

    render: function () {
        var parentElement = document.getElementById('details')
        var article = document.createElement('article');
        parentElement.appendChild(article);
        var cityName = document.createElement('h3');
        cityName.textContent = this.Name1;
        article.appendChild(cityName);
        var ul=document.createElement('ul');
        article.appendChild(ul);
        for (var hour = 6; hour < 20; hour++) {
            if (hour < 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
                article.appendChild(workhour); 
            }
            if (hour === 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour);
            }

            if (hour > 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour); 
            }
        }
        var sum=0;
        for (var k=0;k<this.customer.length;k++){
           sum=sum+this.customer[k];
        }  
        var Total=document.createElement('pre');
        Total.textContent='Total'+'     '+sum;
        article.appendChild(Total);
    }
    
};
var Paris = {
    Name1: 'Paris',
    customer: [],
    minCustomer: 20	,
    maxCustomer: 38,
    minHour: 0,
    maxHour: 20,
    avgCookiesPerCustomer: 6.3,
    setcustomre: function () {
        for (var i=0;i<14;i++)
        this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
    },

    render: function () {
        var parentElement = document.getElementById('details')
        var article = document.createElement('article');
        parentElement.appendChild(article);
        var cityName = document.createElement('h3');
        cityName.textContent = this.Name1;
        article.appendChild(cityName);
        var ul=document.createElement('ul');
        article.appendChild(ul);
        for (var hour = 6; hour < 20; hour++) {
            if (hour < 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
                article.appendChild(workhour); 
            }
            if (hour === 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour);
            }

            if (hour > 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour); 
            }
        }
        var sum=0;
        for (var k=0;k<this.customer.length;k++){
           sum=sum+this.customer[k];
        }  
        var Total=document.createElement('pre');
        Total.textContent='Total'+'     '+sum;
        article.appendChild(Total);
    }
    
};

var Lima = {
    Name1: 'Lima',
    customer: [],
    minCustomer: 2,
    maxCustomer: 16	,
    minHour: 0,
    maxHour: 20,
    avgCookiesPerCustomer: 6.3,
    setcustomre: function () {
        for (var i=0;i<14;i++)
        this.customer[i] = generateRandomCustomer(this.maxCustomer, this.minCustomer);
    },

    render: function () {
        var parentElement = document.getElementById('details')
        var article = document.createElement('article');
        parentElement.appendChild(article);
        var cityName = document.createElement('h3');
        cityName.textContent = this.Name1;
        article.appendChild(cityName);
        var ul=document.createElement('ul');
        article.appendChild(ul);
        for (var hour = 6; hour < 20; hour++) {
            if (hour < 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'am:    ' + this.customer[hour-6]+' cookies';;
                article.appendChild(workhour); 
            }
            if (hour === 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour+'pm:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour);
            }

            if (hour > 12) {
                var workhour = document.createElement('li');
                workhour.textContent = hour - 12+'am:    '+this.customer[hour-6]+' cookies';
                article.appendChild(workhour); 
            }
        }
        var sum=0;
        for (var k=0;k<this.customer.length;k++){
           sum=sum+this.customer[k];
        }  
        var Total=document.createElement('pre');
        Total.textContent='Total'+'     '+sum;
        article.appendChild(Total);
    }
    
};


function generateRandomCustomer(max, min) {

    var M = Math.floor(Math.random() * (max - min)) + min;
    console.log(M);
    return M;
}
seattle.setcustomre();
seattle.render();
Tokyo.setcustomre();
Tokyo.render();
Dubai.setcustomre();
Dubai.render();
Paris.setcustomre();
Paris.render();
Lima.setcustomre();
Lima.render();




