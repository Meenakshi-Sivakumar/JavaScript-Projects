const jasonFile = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(jasonFile)
    .then(blob => blob.jason())
    .then(data => cities.push(...data));

function findMatches(inputToMatch,cities){
    return cities.filter(places=> {
        const regex = new RegExp(inputToMatch,'gi');
        return places.city.match(regex) || places.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  

function displayMatches() {
    const matchArray = findMatches(this.value,cities);
}

const searchInput = document.querySelector('search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);