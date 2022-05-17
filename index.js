const Calculate = {
  factorial(num){
      let ans = 1
      for (let i=num; i>0; i--){
        ans *= i;
      };
      return ans;
  }
}

module.exports = Calculate;