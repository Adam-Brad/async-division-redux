export function isNumber(n: number){
  if (isNaN(n) || n === Infinity) {
    return false;
  }
  return true;
}
