// JavaScript – functions
// The following exercise contains the following subjects:
// ● Debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function getSum(arr1, arr2){
let sum = 0;                        // didn't allow to make changes, 
                                    // because the variable was const

for (let i=0; i < arr1.length; i++){ // showed error, because we called function 
                                    // with 2 arrays, but they weren't comma separated getSum([1,2,3][5,66,23]). 
                                    // so the the loop got confused with the length
sum += arr1[i];
}
for (let i=0; i < arr2.length; i++){
sum += arr2[i];
}
}
getSum([1,2,3],[5,66,23]); // comma added on order to separate 