function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i
    
    if (word[i] !== word[j]) return false
  }
  return true
}

/*
  make a function that returns true if palindrome. if the first letter is the same
  as the last letter and the second is the same from the second to last and so on
*/

/* 
  Add your pseudocode here
  iterate form the beginning to middle of word
    check each letter to the corresponding letter to the end 
      if letters dont match return false

  return true

*/

/*
  Add written explanation of your solution here
  function takes in a word and checkes the first and last letter to check if ===
  then will move to the second and second to last and so on checking ===
  if all are === returns true if not returns false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  /*
    abba
    ^  ^
     ^^
  */
}

module.exports = isPalindrome;
