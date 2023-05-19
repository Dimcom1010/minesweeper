import { variables } from "./variables.js";


export function audioClick(){
    const audio = 'src/audio/click.mp3';
    !variables.isAudio && playAudio(audio)
}
export function audioBoom(){
    const audio = 'src/audio/boom.mp3';
    !variables.isAudio && playAudio(audio)
}
export function audioWin(){
    const audio = 'src/audio/syn.mp3';
    !variables.isAudio && playAudio(audio)
}

 function playAudio(audio) {
    variables.isAudio=true
    const audioElement = new Audio(audio);
    audioElement.play();
    audioElement.addEventListener("ended",()=>variables.isAudio=false );
}

