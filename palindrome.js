function checkPalindrome(str) {
  let subStr = str;
  let isPalindrome = true;
  while (subStr.length > 1) {
    const firstLetter = subStr.substr(0, 1);
    const lastLetter = subStr.substr(subStr.length - 1);
    if (firstLetter.toLowerCase() !== lastLetter.toLowerCase()) {
      isPalindrome = false;
      break;
    }
    subStr = subStr.substr(1, subStr.length - 2);
  }
  return isPalindrome;
}

console.log("_____>>>>>>", checkPalindrome("adada"));
