/* a) Ask the user for their age and how far they are travelling (in km)
   b) The price per travelled km will be £0.21
   c) Junior passengers (under 18) get a 20% discount
   d) Senior passengers (over 65) get a 40% discount
   e) Based on the answers, show a message which tells the user how much they will pay for the ride.*/

const age = Number(prompt("What's your age?"));
const distance = Number(prompt("How many KM will you travel?"));




let pricePerKm = 0.21;
let basePrice = pricePerKm * distance;

if (age < 18) {
    discountedPrice = (basePrice * 0.8);
    document.write('You need to pay ' + '£' + discountedPrice.toFixed(2));
} else if
    (age > 65) {
    discountedPrice = (basePrice * 0.6);
    document.write('You need to pay ' + '£' + discountedPrice.toFixed(2));

} else {
    document.write('You need to pay ' + '£' + basePrice.toFixed(2));
}

