const Country = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountriesDisplay = require('./views/display_view.js')

document.addEventListener('DOMContentLoaded', () => {


  const country = new Country();
  country.getData();
  country.bindEvents();

  const selectContainer = document.querySelector('#countries');
  const selectView = new SelectView(selectContainer);
  selectView.bindEvents();

  const countryContainer = document.querySelector('div#country');
  const countryDisplay = new CountriesDisplay(countryContainer);
  countryDisplay.bindEvents();





});
