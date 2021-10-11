var groceries = ['lettuce', 'tomatoes', 'burger bun', 'mayo'];

function myTrolley(groceries)

    let shopping = prompt("Add to trolley:");

    if (groceries.includes(shopping)){
        alert("Already added");
    } else {
        groceries.push(shopping);
        console.log("Added to trolley");
        console.log(groceries);
}

console.log(myTrolley(groceries));
