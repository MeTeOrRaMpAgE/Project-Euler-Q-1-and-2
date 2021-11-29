function multiplesOf3and5(number) {
    let total = 0
  for(let i = 0; i <= number; i++) {
        let remainderFor3 = i % 3;
        let remainderFor5 = i % 5;

        if(remainderFor3 == 0 || remainderFor5 == 0) {
            total = total + i
        }
    }
    return total
}
    console.log(multiplesOf3and5(1000))
