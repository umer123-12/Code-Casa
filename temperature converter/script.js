// telling the DOM what we're going to be working with. these button ids are what will trigger the actions
document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = clearForm;

// the function triggered by the convert button.
function tempConvert() {
  //getting the values from the fahrenheit and celsius input fields, so we have a number to work with.
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = document.getElementById("celsius").value;

  // conditional that checks which blank is being used. if statement says "if the fahrenheit input is not blank, perform the celsius calculation. the else statement does the fahrenheit conversion on whatever is put in the celsius blank.
  // parseFloat is used here to make sure the value taken from the input is converted to a float and that math operations can be performed on that value. (Remember, you can't perform math on strings.) Didn't use parseInt for integers because sometimes temperature has decimal points.
  if (fahrenheit != "") {
    celsius = (parseFloat(fahrenheit) - 32) / 1.8;
  } else {
    fahrenheit = parseFloat(celsius) * 1.8 + 32;
  }

  // these lines take the converted value after the math has been done and puts it in the appropriate blank. I used parseFloat and toFixed(1) on the final value to make sure I didn't get any long decimal points. toFixed(1) makes sure the float is cut off at one decimal place.
  document.getElementById("fahrenheit").value =
    parseFloat(fahrenheit).toFixed(1);
  document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}

// the function to clear out the values of the temperature inputs.
function clearForm() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
}
