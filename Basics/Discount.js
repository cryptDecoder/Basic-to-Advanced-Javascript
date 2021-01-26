/**
 *  In this section we are going to learn the discount of price.
 */

console.log("# ----- DISCOUNT CALCULATION ON PRICE ----- #");


var sellingPrice = 200;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount price is :" + discountPercent);

absDiscount = Math.round(discountPercent)
console.log("Round discount : " + absDiscount);