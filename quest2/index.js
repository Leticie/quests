// rekurzivní funkce, počítá násobek x a x-1 dokud se input nerovná 0

function countFactorial(n) {
  //ukončuje rekurzi při negativním inputu
  if (n < 0) {
    return -1;
  }
  //když je input 0 vrací její faktoriál
  else if (n === 0) {
    return 1;
  }
  //vrací faktoriál zadaného čísla, v každém opakobání se od n odečte 1
  return n * countFactorial(n - 1);
}
