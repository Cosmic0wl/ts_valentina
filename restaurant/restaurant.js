var menu = [{
        name: "Pasta",
        price: 14,
        rating: 0
    }, {
        name: "Salmon",
        price: 19,
        rating: 0
    }, {
        name: "Popsicle",
        price: 8,
        rating: 0
    },
];
menu.forEach(function (value) {
    var name = value.name, price = value.price;
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
var i = 0;
menu.forEach(function (menuItem) {
    var j = 0;
    var _loop_1 = function (j_1) {
        var star = stars[i * 5 + j_1];
        console.log(star);
        star.addEventListener("click", function () { setRating(menuItem, j_1 + 1); });
    };
    for (var j_1 = 0; j_1 < 5; j_1++) {
        _loop_1(j_1);
    }
    i++;
});
function setRating(item, rating) {
    item.rating = rating;
    console.log(item);
}
