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

  function sayHiToGrandma(hello){
    if ('hello' === "HELLO".toLowerCase()) return "I can\'t hear you!";
    else if ('HELLO' === "hello".toUpperCase()) return "YES INDEED!";
    else if ('I love you, Grandma.' === "I love you, Grandma.") return "I love you, too.";
    
}
