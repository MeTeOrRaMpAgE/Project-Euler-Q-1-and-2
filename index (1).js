function fiboEvenSum(n) {
  let fibNumSum = 0; 
  let fibCurrent = 0; 
  let fibNext = 1; 
  for (let i = 1; i <= n; i++) {
    let fibTotal = fibCurrent + fibNext;
    fibCurrent = fibNext;
    fibNext = fibTotal;
    if (fibTotal % 2 == 0) {
      fibNumSum += fibTotal;
    }
  }
  return fibNumSum;
}
fiboEvenSum(10);