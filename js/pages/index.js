document.addEventListener("DOMContentLoaded", () => {
        const main = document.querySelector("main")
        weatherApp.dataStore.list().forEach((cities) => {
          main.innerHTML = main.innerHTML + weatherApp.components.createCardsItem(cities)
        });

        

});
