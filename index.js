const Calculate = {
  factorial(num){
      if (num == 0) {
          return 1;
      }
      let ans = 1
      for (let i=num; i>0; i--){
        ans *= i;
      };
      return ans;
  }
}

module.exports = Calculate;