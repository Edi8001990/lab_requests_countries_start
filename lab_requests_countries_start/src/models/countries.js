const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Country = function() {
  this.info = null;

}

Country.prototype.getData = function() {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) =>{


    // this.text = data;


    // allCountries = data.map((country) =>{
    //   return  country.name
    //
    // })
    this.info = data;
    console.log(this.info);
    // console.log(allCountries);
    PubSub.publish('Country:country-loaded', this.info);

  });

}

Country.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:change', (event) =>{
    const selectedIndex = event.detail;
    this.publishCountryDetail(selectedIndex);
  });


Country.prototype.publishCountryDetail = function(selectedIndex) {

  const seletedCountry = this.info[selectedIndex];
  PubSub.publish('CountrySelectedCountry', seletedCountry);

}

}

module.exports = Country;
