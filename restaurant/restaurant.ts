const menu : Array<any> = [{
	name: "Pasta",
	price: 14,
	rating: 0
}, {
	name: "Salmon",
	price: 19,
	rating: 0
},{
	name: "Popsicle",
	price: 8,
	rating: 0
},
];

menu.forEach(function(value){
	let {name, price} = value;
	document.getElementsByClassName("card-title")[menu.indexOf(value)].innerHTML = name;
	document.getElementsByClassName("card-text")[menu.indexOf(value)].innerHTML = price + "$";
});

// var btn = document.getElementsByClassName("btn");
// var i = 0;
// btn.forEach(function(value){
// 	value.addEventListener("click", function(), starRatingByColor);
// 	i++;
// });

// function starRatingByColor() {
// 	var star = document.getElementsByClassName("fa");
// 	star.classList.add("checked");
// }

var stars = document.getElementsByClassName("fa");
var i:number = 0;
menu.forEach(function(menuItem){
	let j:number = 0;
	for (let j = 0; j < 5; j++) {
		let star = stars[i * 5 + j];
		console.log(star);
		star.addEventListener("click", function() {setRating(menuItem,j+1)});
	}
	i++;
});

function setRating(item : any, rating : number){
	item.rating = rating;
	console.log(item);
}