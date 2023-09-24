window.addEventListener("load", () => { 
    document.body.style.background = randomColor(); 
});

function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}

// // var generateColor = function () {
// //     // hex numbers 
// //     var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// //     var color = '#';
// //     // we will generate hex color with 6 digit length
// //     for (var i = 0; i < 6; i++) {
// //         let index = rand(0,15);
// //         // Append hex value at the index
// //         color += hex[index];
// //     }
// //     return color;
// // };

var randomColor = function () {
    var colors = ['#4C48B0', '#7285D8', '#FFC1BA', '#FFE8D6', '#CD5C84', 
            '#4A4DB7', '#93AEEF', '#EDCBDD', '#F5F8F7', '#FFE3DB', '#C4D6F0']
    var color = colors[rand(0,10)];
    return color;
} 