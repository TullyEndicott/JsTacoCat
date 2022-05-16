//get string from app page
// controller function
function getValues(){
    hideAlert(); //makes sure div id='alert' invisible on start
    //get the palindrom candidate
    let userString = document.getElementById('userString').value;
    //check for a palindrome
    //let revString = reverseString(userString);
    let returnObj= palindrome(userString);
    //print the outcome
    displayString(returnObj);
}

//reverse string
//logic function
/*
function reverseString(userString){
    let revString = []; //allow array functions

    for (let index = userString.length-1; index >= 0; index--) {
       revString += userString[index]; //pust into revString
        
    }
    return revString;
}
*/
// from https://stackoverflow.com/questions/46276224/how-to-remove-all-non-alphabet-characters-javascript#46276295
function palindrome(userString) {

    let palinRA = [];
    let msgStr = "";

    userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi; //reove all spaces, special char. - numbers and alpha only
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj  = {};

    for (let index = userString.length-1; index >= 0; index--) {
      revString += userString[index]; //And verily the last shall be first
      
    }

    if (revString == userString) {
      returnObj.msg = "Well done! You entered a palindrome."
    }else{
      returnObj.msg = 'Sorry! You did not enter a palindrome.'
    }

    returnObj.reversed = revString;

    return returnObj;

  }
  
  ///palindrome("inabcbani"); //true
  //palindrome("abcddcba"); //true
  //palindrome("a*#$(b)&^@%@%(*a"); //true
  //palindrome("abba"); //true
  //palindrome("abcdba"); //false

//display result and message
//View function
function displayString(returnObj){
    //write to the page
    //document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`
    //show alert div
    document.getElementById("alert").classList.remove("invisible");
}

function hideAlert(){  //hide 'alert' div
    document.getElementById('alert').classList.add('invisible');
}

/********Inline script in app.html
 * 
 *   <script>
        document.getElementById("btnSubmit").addEventListener("click", getValue)
    </script>
    <script>
        document.getElementById("btnReset").addEventListener("click", hideAlert)
    </script>
 */