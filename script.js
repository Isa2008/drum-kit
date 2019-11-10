(function () {

    const keys = document.querySelectorAll('.key');
    // it's a Node List, not an array!
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

    function playSound(e) {
        // console.log(e.keyCode);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        // console.log(audio);
        if (!audio) return; // stop the function from running all together
        audio.currentTime = 0; // rewind to the start
        audio.play();
        // console.log(key);
        key.classList.add('playing');
    }

    function removeTransition(e) {
        // console.log(e);
        if (e.propertyName !== 'transform') return; // skip it if it's not a transform
        // console.log(e.propertyName);
        // console.log(this);
        this.classList.remove('playing');
    }

})();
