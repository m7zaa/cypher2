var sentence = prompt("Enter a sentence:");


// sentence =  sentence[0].toUpperCase() + sentence.slice(1);

// sentence = sentence.slice(0, sentence.length -1) + sentence[sentence.length-1].toUpperCase();



var firstLastCap = function(sentence) {
  sentence = sentence[0].toUpperCase() + sentence.slice(1);
  return sentence.slice(0, sentence.length -1) + sentence[sentence.length-1].toUpperCase();
}



console.log(firstLastCap(sentence));
