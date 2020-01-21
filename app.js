let btn = document.querySelector(".myButton");

let display = document.querySelector(".display");

let beer = document.getElementById("beer");

let drink;

btn.addEventListener("click", () => {
    beer.checked == true ? (drink = 1) : (drink = 0);

    function shoot(arrow, headshot, fail) {
        display.innerText = "You made a shot";

        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => {
                Math.random() > 0.5 ? resolve({}) : reject("You missed");
            }, 3000);
        });
        return promise;
    }

    function win() {
        display.innerText = "You win! Congrats!";
        drink == 1 ? buyBeer() : giveMoney();
    }

    function buyBeer() {
        display.innerText = "You got a beer!";
    }

    function giveMoney() {
        display.innerText = "You got a money";
    }

    function loose() {
        display.innerText = "You loose! Try more!";
    }

    shoot({})
        .then(mark => (display.innerText = "You hit the target!!!"))
        .then(win)
        .catch(loose);
});
