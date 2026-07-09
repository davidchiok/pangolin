


/*

create an object.called car.
properties:name,model,top speed
engine_information:<object>how many cylinders,number
manufacturer:object<> name,aka,country
<number as property<key>>:any number
alert_info:function when called alerts the name of the car and its top speed
*/

const car = {
    name: "Mustang",
    model: "GT",
    topSpeed: 155,
    engine_information: {
        cylinders: 8,
        number: "V8"
    },
    manufacturer: {
        name: "Ford",
        aka: "The Blue Oval",
        country: "USA"
    },
    2021: "This is a special edition",
    alert_info: function() {
        alert(`Car Name: ${this.name}, Top Speed: ${this.topSpeed} mph`);
    }
};

// Example usage
car.alert_info();