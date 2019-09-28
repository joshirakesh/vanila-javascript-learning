function playSoundAndAnimate(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) { // if no audio associated with key stop the function all together
        return;
    }
    audio.currentTime = 0; // restart the audio every time
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add(['playing']);
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') { // we don't need to consider all transitions 
        return;
    }
    this.classList.remove('playing');
}

document.addEventListener('keydown', playSoundAndAnimate);

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));