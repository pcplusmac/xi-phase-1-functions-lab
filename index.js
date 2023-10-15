// Code your solution in this file!
const hq = 42;
// declare 'pickUp' variable to keep the value of pick-up block
let pickUp; 
// define function distanceFromHqInBlocks
function distanceFromHqInBlocks(pickUp) {
    let blocks = pickUp - hq;
    return blocks;

}