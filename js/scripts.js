function wordOrder(input_words) {

  var input_array = input_words.replace(/[^a-z'-\s]/ig, "").split(" ");
  var occurances = {};

  input_array.forEach(function(word) {

    if(occurances.hasOwnProperty(word)) {
      occurances[word] += 1;
    } else {
      occurances[word] = 1;
    }
  });

  var occurances_sorted = Object.keys(occurances).sort(function(a,b) {
    return occurances[b]-occurances[a];
  });

  return occurances_sorted;
}

$(document).ready(function() {
  $("form#word-order").submit(function(event) {

    var string = $("#word").val();
    var ordered = wordOrder(string);

    var output = "";
    ordered.forEach(function(word) {
      output += "<p>" + word + "</p>";
    });
    
    $("#words").append(output);



  event.preventDefault();
  });
});
