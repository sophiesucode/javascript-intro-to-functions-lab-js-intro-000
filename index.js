function shout(hello) {
  return 'hello'.toUpperCase()
};

function whisper(HELLO){
  return 'HELLO'.toLowerCase()
};
  function logShout(hello){
    console.log('hello'.toUpperCase());
  }
function logWhisper(HELLO){
  console.log('HELLO'.toLowerCase());
}

function sayHiToGrandma (hello) {
  var cantAnswer = "I can't hear you!";
  var yesAnswer = "YES INDEED!";
  var loveAnswer = "I love you, too.";
  if ('hello'.toLowerCase()) {
    return cantAnswer;
  }
  else if ('hello'.toUpperCase()) {
    return yesAnswer;
  }
  else if ('I love you, Grandma.') {
    return loveAnswer;
  }
}
