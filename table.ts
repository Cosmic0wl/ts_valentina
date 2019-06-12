let numbers: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let factors: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var text = "<table class='table'><tr><thead class='thead-dark'><th scope='col'>Number</th><th scope='col'>Multiply By</th><th scope='col'>Product</th><thead></tr><tbody>";

for (i = 0; i < numbers.length; i++) {
  for (k = 0; k < factors.length; k++) {
     text += "<tr><td>" + numbers[i] +"</td><td>" + factors[k] +"</td><td>" + numbers[i]*factors[k] +"</td></tr>\n";
  }
}
text += "</tbody></table>";
document.getElementById("table").innerHTML = text;