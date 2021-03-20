const text = "Hello, Wolrd!";
const talk = (text) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
talk(text);
