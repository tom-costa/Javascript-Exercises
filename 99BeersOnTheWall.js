// Using a WHILE Loop:

var count = 100

function beer(){
    while (count >= 2) {
        count--;
        console.log(count + " beers on the wall");
        if (count === 2){
            count--;
            console.log(count + " beer on the wall");
        }
    }
}

beer();



