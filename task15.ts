/*Seeing the world Program  */
let locations: string[] = ['Paris', 'Italy', 'Turkey', 'Maldives', 'Lisbon'];
let originalarray: string[] = [...locations];
let n: number = 0;
console.log('Original form of array\n');
for (n = 0; n < locations.length; n++) //array in its original form
{
    console.log(locations[n]);
}
locations.sort();
console.log('Sorted Form Alphabetically\n'); // array in alphabetical order
for (n = 0; n < locations.length; n++) {
    console.log(locations[n]);
}
console.log('Original form of array\n');  // array in its original form
for (n = 0; n < originalarray.length; n++) {
    console.log(originalarray[n]);
}
locations.reverse();
console.log('Reverse Alphabetical order \n');  // array in reverse alphabetical order
for (n = 0; n < locations.length; n++) {
    console.log(locations[n]);
}
console.log('Original form of array\n'); // array in original form
for (n = 0; n < originalarray.length; n++) {
    console.log(originalarray[n]);
}
