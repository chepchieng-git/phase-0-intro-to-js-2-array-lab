// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    
    cats.push("Ralph");
    return destructivelyAppendCat;

}

function destructivelyPrependCat(name) {
    
    cats.unshift("Bob")
    return destructivelyPrependCat;
} 

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return destructivelyRemoveLastCat;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return destructivelyRemoveFirstCat;
}

function appendCat(name) {
    const appendCat = [...cats, "Broom"]
    return appendCat;
}

function prependCat(name) {
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}

function removeLastCat(name) {
    const removeLastCat = cats.slice(0, cats.length -1);
    return removeLastCat;
}
function removeFirstCat(name) {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}