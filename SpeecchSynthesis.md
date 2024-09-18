# Speech Synthesis JavaScript Code Explanation

This document provides a line-by-line explanation of the JavaScript code for the Speech Synthesis project.

```javascript
const textBoxElement = document.querySelector("#textInput");
```
- Selects the textarea element with the id "textInput" and stores it in `textBoxElement`.

```javascript
const imgElement = document.querySelector('#toggleIcon');
```
- Selects the image element with the id "toggleIcon" and stores it in `imgElement`.

```javascript
const selectOption = document.querySelector("#voiceSelect");
```
- Selects the select element with the id "voiceSelect" and stores it in `selectOption`.

```javascript
const speechSynthesis = window.speechSynthesis;
```
- Assigns the Web Speech API's speech synthesis interface to `speechSynthesis`.

```javascript
let isTalking = false;
```
- Initializes a boolean variable to track whether the speech synthesis is currently active.

```javascript
const speech = function () {
    // ... (function body)
};
```
- Defines the main `speech` function that handles the text-to-speech conversion and control.

```javascript
if(!isTalking){
    // ... (code for starting speech)
} else {
    // ... (code for pausing speech)
}
```
- Checks if speech is not active. If so, it starts the speech; otherwise, it pauses the ongoing speech.

```javascript
let msg = textBoxElement.value;
```
- Retrieves the text from the textarea.

```javascript
let utterance = new SpeechSynthesisUtterance(msg);
```
- Creates a new `SpeechSynthesisUtterance` object with the input text.

```javascript
let voices = speechSynthesis.getVoices();
```
- Gets all available voices from the speech synthesis API.

```javascript
let voiceEng = [];
voices.forEach((voice) => {
    if(voice.lang === 'en-US' || voice.lang === 'en-GB'){
        voiceEng.push(voice);
    }
});
```
- Filters the voices to include only English (US and UK) voices.

```javascript
let option = parseInt(selectOption.value);
```
- Gets the selected voice option as an integer.

```javascript
utterance.voice = voiceEng[option];
```
- Sets the selected voice for the utterance.

```javascript
utterance.onend = function() {
    isTalking = false;
    isPaused = false;
    imgElement.src = 'image/volume.png';
};
```
- Defines what happens when the speech ends: resets states and updates the UI.

```javascript
speechSynthesis.speak(utterance);
```
- Starts the speech synthesis with the configured utterance.

```javascript
imgElement.src = 'image/pause.png';
isTalking = true;
```
- Updates the UI to show the pause icon and sets the talking state to true.

```javascript
const volumeButton = document.querySelector('#toggleButton');
```
- Selects the toggle button element.

```javascript
volumeButton.addEventListener('click', speech);
```
- Adds a click event listener to the toggle button, which triggers the `speech` function.

This code creates a simple text-to-speech application with play/pause functionality and voice selection options.