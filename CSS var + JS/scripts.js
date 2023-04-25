const input = document.querySelectorAll('.controlers input');

function inputHandler(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

input.forEach(e=>{
    e.addEventListener('change',inputHandler);
    e.addEventListener('mousemove',inputHandler)
});