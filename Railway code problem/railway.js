class railwaytrain {
    constructor(name, depart, arrival, distance, passengers) {
        this.name = name;
        this.depart = depart;
        this.arrival = arrival;
        this.distance = distance;
        this.passengers = passengers;
    }

    totaltime() {
        return this.arrival - this.depart;
    }

    getroundtrip() {
        var a = this.arrival - this.depart;
        return a * 2;
    }
}

function traininfo(train1, train2, train3) {
    console.log("   Train Name: " + train1.name + "  Train1 Depart: " + train1.depart + "  Train1 Arrival: " + train1.arrival + "  Train1 Distance: " + train1.distance + "  Train1 Passenger: " + train1.passengers + "  Train1 Roundtrip: " + train1.getroundtrip());
    console.log("   Train Name: " + train2.name + "  Train2 Depart: " + train2.depart + "  Train2 Arrival: " + train2.arrival + "  Train2 Distance: " + train2.distance + "  Train2 Passenger: " + train2.passengers + "  Train2 Roundtrip: " + train2.getroundtrip());
    console.log("   Train Name: " + train3.name + "  Train3 Depart: " + train3.depart + "  Train3 Arrival: " + train3.arrival + "  Train3 Distance: " + train3.distance + "  Train3 Passenger: " + train3.passengers + "  Train3 Roundtrip: " + train3.getroundtrip());
}

function trainstatus(train1, train2, train3, time) {
    let x = 0;
    let trains = [train1, train2, train3];
    let tstatus = [];

    for (let i = 0; i < trains.length; i++) {
        if (x + trains[i].getroundtrip() <= time) {
            x += trains[i].getroundtrip();
            tstatus.push(trains[i].name);
        }
    }

    console.log("Trains which completed their trip within the given time:");
    for (let j = 0; j < tstatus.length; j++) {
        console.log(tstatus[j]);
    }

    let tstatusSet = new Set(tstatus); 
    console.log("Trains which did not complete their trip within the given time:");
    for (let i = 0; i < trains.length; i++) {
        if (!tstatusSet.has(trains[i].name)) {
            console.log(trains[i].name);
        }
    }
}

const train1 = new railwaytrain('Train1', 5, 6, 4, 100);
const train2 = new railwaytrain('Train2', 7, 10, 4, 100);
const train3 = new railwaytrain('Train3', 11, 13, 4, 100);

traininfo(train1, train2, train3);
trainstatus(train1, train2, train3, 4);
