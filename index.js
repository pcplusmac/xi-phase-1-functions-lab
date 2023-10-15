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