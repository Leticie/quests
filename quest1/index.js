import data from "./data.json" assert { type: "json" };

//creating an array containing the direction and the movement value
const array = data.map((item) => {
  return item.move.split(" ");
});

//starting point
const verticalPosition = 4030;
const horizontalPosition = 2990;


//separating vertical and horizontal movement
const movementForward = array.filter((item) => item[0] === "forward");
const movementUp = array.filter((item) => item[0] === "up");
const movementDown = array.filter((item) => item[0] === "down");

//subtracting vertical movement
const sumFinalVerticalPosition = (movementUp, movementDown) => { //pass as args because pure function
  const initialValue = 0
  const totalUp = movementUp.reduce(
    (accumulator, movementValue) => +accumulator + +movementValue[1], //cast string into int, index[1] is movement count
    initialValue
  );

  const totalDown = movementDown.reduce(
    (accumulator, movementValue) => +accumulator + +movementValue[1],
    initialValue
  );

  return verticalPosition + totalUp - totalDown;
};

//final vertical position
const finalVerticalPosition = sumFinalVerticalPosition(movementUp, movementDown)

//subtracting horizontal movement
const finalHorizontalPosition = movementForward.reduce(
    (accumulator, movementValue) => +accumulator + +movementValue[1],
    horizontalPosition
  );

//console results
console.log("vertical: " + finalVerticalPosition);
console.log("horizontal: " + finalHorizontalPosition);