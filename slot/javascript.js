var goruns = [];
var pushprick = 0;
var gorun;
var first = Math.floor(Math.random() * 24);
var steps = 0;

for (var j = 1; j <= 24; j++) {
    gorun = document.getElementById("a" + j);
    if (!gorun) {
        break;
    }
    goruns.push(gorun);
}
console.log(goruns);

document.getElementById("start").onclick = function() {
    var x = Math.floor(Math.random() * 24);
    console.log(x);
    steps = 48 + x;
    console.log(steps);

    run();
}

function run() {



    goruns[first].classList.remove("outl");
    goruns[first].className += " outl-none";

    first++;
    if (first > 23) {
        first = 0;
    }
    goruns[first].classList.remove("outl-none");
    goruns[first].className += " outl";
    if (steps > 0) {
        steps--;
        setTimeout(run, 95);
    } else {
        console.log("OK" + first);
    }
}