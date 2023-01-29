async function runTTS() {    
    console.log(text);
    console.log('hello');
    chrome.tts.speak(text[0], { rate: 0.7 });
}
document.getElementById("start-tts-btn").addEventListener("click", runTTS);
