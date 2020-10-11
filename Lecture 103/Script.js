var count1 = -10;

console.log("Numbers between -10 and 19")
while(count1 <=19) {
	console.log(count1);
	count1++;
}

var count2 = 10;

console.log("Even Numbers between 10 and 40")
while(count2 <=40) {
	console.log(count2);
	count2+=2;
}

var count3 = 300;

console.log("Odd Numbers between 300 and 333")
while(count3 <=333) {
	if (count3 % 2 !== 0) {
	console.log(count3)};
	count3++;
}

var count4 = 5;

console.log("All Numbers divisible by 5 and 3")
while(count4 <=50) {
	if (count4 % 5 === 0 && count4 % 3 === 0) {
	console.log(count4)};
	count4++;
}