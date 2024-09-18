// console.dir(window)

const textBoxElement = document.querySelector("#textInput");
console.dir(textBoxElement);

const imgElement = document.querySelector('#toggleIcon')
// console.log(imgElement);


const selectOption = document.querySelector("#voiceSelect")
console.dir(selectOption);



const speechSynthesis = window.speechSynthesis
// console.dir(speechSynthesis);

let isTalking = false





const speech = function () {
    if(!isTalking){
        // console.log("done");
        let msg = textBoxElement.value
        // console.log(msg);

        let utterance = new SpeechSynthesisUtterance(msg)
        // console.log(utterance);


        let voices = speechSynthesis.getVoices()
        // console.log(voices);

        let voiceEng = []

        voices.forEach((voice) => {
            if(voice.lang === 'en-US' || voice.lang === 'en-GB'){
                voiceEng.push(voice)
            }
        })
        // console.log(voiceEng);

        let option = parseInt(selectOption.value);
        // console.log(option);

        utterance.voice = voiceEng[option]


        utterance.onend = function() {
            isTalking = false;
            isPaused = false;
            imgElement.src = 'image/volume.png';
        };

        speechSynthesis.speak(utterance);
        imgElement.src = 'image/pause.png'
        isTalking = true;
    }else{
        speechSynthesis.pause()
        imgElement.src = 'image/volume.png'
        isTalking = false;
    }

}



const volumeButton = document.querySelector('#toggleButton')
// console.log(volumeButton);
volumeButton.addEventListener('click',speech)