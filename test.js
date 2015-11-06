/*function testico(x) {
    return x;
}

var z = 2

function test1(x) {
    var y = 100;
    while(x<y){console.log(x);
              y = (x+y)/2;
              x++;
    }
}

for(i=0; i<10; i++){
    console.log("the i value is, " + i);
}*/

/*var numSheep = 4;
var monthNumer = 1;
var mothsToPrint = 12;

while(monthNumer<=mothsToPrint){
    numSheep = numSheep * 4;
    console.log("there will be " + numSheep + " sheep after " + monthNumer + " month(s)!");
    monthNumer++;
        
}*/

/*for(i=10; i>0; i--){
    if (i%3==1) {
    console.log(i + " halleluyer!");
    } else {
    console.log(i)
    }
}*/

/*var arrrg = ["hey","there","guy","idc what","im writing here"];

for(i=0; i<arrrg.length; i++){
    var str = "the current value is "+ arrrg[i];
    console.log(str);
}*/

/*var list = [12,23,34,45,56,67,78,89,910];

var addition = 0;

function listAdd(thing){
    for (i=0; i<thing.length; i++){
        addition = addition + thing[i];
        console.log(addition);
    }
}*/

var car1 = {make: "BMW",
            model: "M3",
            year: 2006,
            price: 30000,
            color: "silver",
            finish: "gloss",
            interior: "black",
            vin: 102919881
           }

var car2 = {make: "BMW",
            model: "M3",
            year: 2012,
            price: 50000,
            color: "grey",
            finish: "gloss",
            interior: "brown",
            vin: 102919882
           }

var car3 = {make: "BMW",
            model: "M4",
            year: 2016,
            price: 100000,
            color: "Electric Blue",
            finish: "gloss",
            interior: "white",
            vin: 102919883
           }

var car4 = {make: "BMW",
            model: "M5",
            year: 2006,
            price: 120000,
            color: "white",
            finish: "gloss",
            interior: "red",
            vin: 102919884
           }

var myDealership = {
    carPurchase: function(make, model, year, price, color, finish, interior, vin) {
        myDealership["inventory"].push({make: make,
                                       model: model,
                                       year: year,
                                       price: price,
                                       color: color,
                                       finish: finish,
                                       interior: interior,
                                       vin: vin
                                       });
        myDealership.carsOnHand ++;  
    },
    carSale: function(vin) {
        for (var i = 0; i< myDealership.inventory.length; i++){
            if (myDealership.inventory[i].vin == vin) {
                myDealership.inventory.splice(i, 1);
                myDealership.carsOnHand --;
            }
        }
    },
    inventory: [car1, car2, car3, car4],
    hours: "9am - 4am",
    revenue: 300000,
    carsOnHand: 4
};