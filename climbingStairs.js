function countWaysToClimbStairs(n) {
  if (n <= 1) {
    return 1; // There is only one way to climb 0 or 1 step
  }

  var dp = []; // Initialize an array to store the number of ways to climb each step
  dp[0] = 0; // There is only one way to climb 0 step
  dp[1] = 1; // There is only one way to climb 1 step
  dp[2] = 2; // There is only two ways to climb 2 step

  // Use dynamic programming to calculate the number of ways to climb each step
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // The number of ways to climb the nth step is stored in dp[n]
  return dp[n];
}

// Example usage:
// var n = 5; // Number of steps in the staircase
// var ways = countWaysToClimbStairs(n);
// console.log("Number of different ways to climb", n, "steps:", ways);

console.log(countWaysToClimbStairs(2));
console.log(countWaysToClimbStairs(0));
console.log(countWaysToClimbStairs(3));
console.log(countWaysToClimbStairs(5));


const employeeName = "Rahul Sharma"