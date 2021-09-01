

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var prop in names) {

  if (names[prop].charAt(0) == "J" || names[prop].charAt(0) == "j") {
    byeSpeaker.speak(names[prop]);
  } else {
    helloSpeaker.speak(names[prop]);
  }
}
