document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const citiesName = urlParams.get('name');

    const cities = weatherApp.dataStore.list().find(item => item.name === citiesName);
    document.getElementById('page-heading').textContent = cities.name;

    const main = document.querySelector('main');
    main.innerHTML = main.innerHTML + weatherApp.components.createCardsItem(cities);
    main.innerHTML = main.innerHTML + weatherApp.components.createCardsInfos (cities.cities);
});