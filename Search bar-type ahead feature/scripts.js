const jasonFile = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(jasonFile)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(inputToMatch,cities){
    return cities.filter(place=> {
        const regex = new RegExp(inputToMatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  

function displayMatches() {
    const matchArray = findMatches(this.value,cities);

    const html = matchArray.map(place=> {
        const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('')

    if(this.value==''){
        suggestions.innerHTML = `<li>Filter For A City</li><li>or A State</li>`
    }else{
        suggestions.innerHTML = html;
    }
    if(!html){
        const pTag = document.createElement('p')
        pTag.innerHTML = 'SEARCH NOT FOUND...';
        suggestions.append(pTag)
    }
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);