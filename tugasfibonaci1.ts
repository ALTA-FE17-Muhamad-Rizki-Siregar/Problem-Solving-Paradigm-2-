function fiboTopdown(num: number) {
    let memo: Array<number> = [];
  
    for (let i = 0; i <= num; i++) {
      if (i <= 1) {
        memo[i] = i;
      } else {
        memo[i] = memo[i - 1] + memo[i - 2];
      }
    }
    return memo[num];
  }
  
  console.log(fiboTopdown(0)); 
  console.log(fiboTopdown(1)); 
  console.log(fiboTopdown(2)); 
  console.log(fiboTopdown(3)); 
  console.log(fiboTopdown(5)); 
  console.log(fiboTopdown(6)); 
  console.log(fiboTopdown(7));
  console.log(fiboTopdown(8));   
  console.log(fiboTopdown(9));
  console.log(fiboTopdown(10));  