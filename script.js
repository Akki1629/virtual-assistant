let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voiceGif = document.querySelector("#voice-gif");

function speak(text) {
  window.speechSynthesis.cancel(); // Clear any previous utterances
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1.1;
  text_speak.volume = 1;
  text_speak.lang = "en-US";

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();

  if (hours >= 0 && hours < 12) {
    speak("good morning sir");
  } else if (hours >= 12 && hours < 16) {
    speak("good afternoon sir");
  } else {
    speak("good evening sir");
  }
}
window.addEventListener("load", () => {
  wishMe();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voiceGif.style.display = "block";
});
function takeCommand(command) {
  btn.style.display = "flex"
  voiceGif.style.display = "none"
  if (
    command.includes("hello") ||
    command.includes("hey") ||
    command.includes("hii")
  ) {
    speak("Hello Sir How can i help you?")

} else if (command.includes("who are you")) {
    speak("My name is melin , I am a virtual assistant ,created by Akshay sir");

  } else if (command.includes("open youtube")) {
    speak("opening youtube...");
    window.open("https://youtube.com/", "_blank")

  } else if (command.includes("open google")) {
    speak("opening google...");
    window.open("https://google.com/", "_blank")

  } else if (command.includes("open instagram")) {
    speak("opening instagram...");
    window.open("https://instagram.com/", "_blank")

  } else if (command.includes("open facebook")) {
    speak("opening facebook...");
    window.open("https://facebook.com/", "_blank")

   } else if (command.includes("open calculator")) {
        speak("opening calculator...")
        window.open("calculator://")

    } else if (command.includes("open whatsapp")) {
        speak("opening whatsapp...")
        window.open("https://web.whatsapp.com/");

  } else if (command.includes("time")) {
    let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
  
  }else if (command.includes("date")) {
        let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
        

   } else {
    let finalText =
      "this is what i found on Internet regarding" +
        command.replace("melin", "") || command.replace("melin", "") || command.replace("meline","")

    speak(finalText);
    window.open(`https://www.google.com/search?q=${command}`)
  }
}
