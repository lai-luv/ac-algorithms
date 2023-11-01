/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 if feel liek you would change the name and the direction or the < sign to >in side the forloop 
 2. How would you display the actual word in the console?
 i guess call the function in a consol log.
 */
// this function has an empty string as parameter 
function findLongestWord(str) {
  // this is a variable that value is the parameter witch is an empty string witch tells me this will come from the user.
  var words = str.split(' ');
  // the is a variable that value is 0 
  var longestWordLength = 0;
  // this is a for loop that loops thru the string to find the longest word in the string giving 
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  
  return longestWordLength;
}

