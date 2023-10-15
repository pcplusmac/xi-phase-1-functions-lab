// Code your solution in this file!
const hq = 42;
// declare 'pickUp' variable to keep the value of pick-up block
let pickUp; 
let dropOff;
// define function distanceFromHqInBlocks
function distanceFromHqInBlocks(pickUp) {
    let blocks = (pickUp < 42) ? (hq - pickUp) : (pickUp - hq);
    return blocks;

}

// define function distanceFromHqInFeet
function distanceFromHqInFeet(pickUp) {
    let blocks = distanceFromHqInBlocks(pickUp);
    let distance = blocks * 264;
    return distance;
}

// define functio distanceTravelledInFeet()
function distanceTravelledInFeet(pickUp, dropOff) {
    let blocks = (dropOff > pickUp) ? dropOff - pickUp : pickUp - dropOff;
    let  distance = blocks * 264;
    return distance;
}

// define calculatesFarePrice(start, destination)
function calculatesFarePrice(start, destination) {
    let blocks = (start < destination) ? destination - start : start - destination;
    let distance = blocks * 264;
    let fare = 0;
    if (distance <=400) {
        fare = 0;
    }
    else if (distance <= 2000) {
        fare = (distance-400) * 2 / 100;
    }
    return fare;
}