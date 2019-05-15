const PubSub = require('../helpers/pub_sub.js');


const CountriesDisplay = function(container) {
  this.container = container;

}

CountriesDisplay.prototype.bindEvents = function() {
  PubSub.subscribe('CountrySelectedCountry', (event) =>{
    const country = event.detail;
    this.render(country);

  })

}


CountriesDisplay.prototype.render = function(country) {
this.container.innerHTML = '';
console.log(country)

const countryName = document.createElement('p');
countryName.textContent = country.name;
this.container.appendChild(countryName);
console.log(countryName);

const countryFlag = document.createElement('img');
countryFlag.src = country.flag;
this.container.appendChild(countryFlag);



}

module.exports = CountriesDisplay;
