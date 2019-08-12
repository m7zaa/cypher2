var sentence = prompt("Enter a sentence:");


// sentence =  sentence[0].toUpperCase() + sentence.slice(1);

// sentence = sentence.slice(0, sentence.length -1) + sentence[sentence.length-1].toUpperCase();



var firstLastCap = function(sentence) {
  sentence = sentence[0].toUpperCase() + sentence.slice(1);
  return sentence.slice(0, sentence.length -1) + sentence[sentence.length-1].toUpperCase();
}
sentence = firstLastCap(sentence);
console.log(sentence);


var swap = function(sentence) {
  var length = sentence.length;
  var temp = sentence[0];
  sentence = sentence[sentence.length -1] + sentence.slice(1, sentence.length -1) + temp;
  return sentence;
}

sentence = swap(sentence);
console.log(sentence);
