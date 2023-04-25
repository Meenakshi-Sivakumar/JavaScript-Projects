const setDate = ()=>{
    const now = new Date();
    //seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //minutes
    const minutes = now.getMinutes();
    const minutesDegrees  = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    //hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

const secondHand = document.querySelector('.seconds');
const minuteHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hours');

setInterval(setDate,1000);