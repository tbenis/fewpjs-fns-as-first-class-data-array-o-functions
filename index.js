
function wakeDog(name, breed) {
    const stringAction = `Wake ${name} the ${breed}`; 
    console.log(stringAction)
    return stringAction;
}
function leashDog(name, breed) {
    const stringAction = `Leash ${name} the ${breed}`; 
    console.log(stringAction)
    return stringAction;
}
function walkToPark(name, breed) {
    const stringAction = `Walk to the park with ${name} the ${breed}`;
    console.log(stringAction)
    return stringAction;
}
function throwFrisbee(name, breed) {
    const stringAction = `Throw the frisbee for ${name} the ${breed}`;
    console.log(stringAction)
    return stringAction;
}
function walkHome(name, breed) {
    const stringAction = `Walk home with ${name} the ${breed}`;
    console.log(stringAction)
    return stringAction; 
}
function unleashDog(name, breed) {
    const stringAction = `Unleash ${name} the ${breed}`;
    console.log(stringAction)
    return stringAction; 
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    const array = [];
    for (let i = 0; i < routine.length; i++) {
        array.push(routine[i](dogName, dogBreed));
        // const fn = routine[i]
        // const exercise = fn(dogName, dogBreed)
        // array.push(exercise)
    }
    return array;
}
