// variable to keep track of whether
// it's f->c or c->f

var fromFahrenheit = false;

// when someone clicks "convert"
  // find the button
  // add a click function to it
$('#convert').click(convert); 
  
function convert() {
  // console.log("working");

  // take the number that's in the input box
    // find input box $('#tempIn')
    // use jQuery .val() on it
    // put in variable
    var number = $('#tempIn').val();
    // console.log(number);

  // convert to fahrenheit
    // take value 
    // value * 9/5 + 32
    // put in Variable
    if (fromFahrenheit == false) {
      var result = number * 9 / 5 + 32;
    } else {
      var result = (number - 32) * 5 / 9;
    }
    // console.log(result);


  // display result as output
    // put result variable in output box
      // look for output box $('#tempOut')
      // put result in output box .text()
    $('#tempOut').text(result);
} 

  // when someone clicks "switch"
    // "C" and "F change places"
  $('#switch').click(switchConvert);
  
    
    
function switchConvert() {
  // formula switches between c->f and f->c
  if (fromFahrenheit == false) {
    fromFahrenheit = true;
  } else {
    fromFahrenheit = false;
  }

  var inputText = $('input').val();
  var outputText = $('.output').text();
  $('input').val(outputText);
  $('.output').text(inputText);

  // "c" and "f" switch
  $('body').toggleClass('fromFahrenheit');
  }

// get the #convert button to respond to the enter key
$("#tempIn").keyup(function(event){
    if(event.keyCode == 13){
        $("#convert").click();
    }
});









