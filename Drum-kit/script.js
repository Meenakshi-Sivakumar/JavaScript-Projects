window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`)
    if(!audio)return; //wrong keys jump out.
    audio.currentTime = 0; //reset to start for multiple hits.
    audio.play();
    key.classList.add('playing');
});
document.addEventListener('transitionend',(e)=>{
    e.target.classList.remove('playing');
})