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

var stars = document.getElementsByClassName("fa");
var i:number = 0;
menu.forEach(function(menuItem){
	let j:number = 0;
	for (let j = 0; j < 5; j++) {
		let star = stars[i * 5 + j];
		star.addEventListener("click", function() {setRating(menuItem,j+1)});
	}
	i++;
});

function setRating(item : any, rating : number){
	item.rating = rating;
	for (let i = 0; i < 5; i++) {
		stars[menu.indexOf(item)*5+i].classList.remove("checked");
		if (rating > i) {
			stars[menu.indexOf(item)*5+i].classList.add("checked");
		}
	}

}