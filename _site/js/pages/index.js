document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const urlParams = new URLSearchParams(window.location.search);
  const onlyFavourites = urlParams.get('onlyFavourites') === 'true';

  weatherApp.dataStore.list().forEach((cities) => {
    const isFavourite = localStorage.getItem(cities.name) === 'true';
    if (onlyFavourites) {
      if (isFavourite) {
        main.innerHTML += weatherApp.components.createCardsItem(cities);
      }
    } else {
      main.innerHTML += weatherApp.components.createCardsItem(cities);
    }
  });

  const favouriteStyle = 'fa-solid fa-heart';
  const notFavouriteStyle = 'fa-regular fa-heart';

  document.querySelectorAll("[id^=fave-]").forEach(icon => {
    icon.addEventListener('click', (event) => {
      const iconElement = event.target;
      const playlistName = iconElement.id.replace('fave-', '');
      const isAlreadyFavourite = localStorage.getItem(playlistName) === 'true';
      const isNowFavourite = !isAlreadyFavourite;

      iconElement.className = isNowFavourite ? favouriteStyle : notFavouriteStyle;
      localStorage.setItem(playlistName, isNowFavourite);
    });
  });

  document.querySelectorAll("[id^=fave-]").forEach(icon => {
    const playlistName = icon.id.replace('fave-', '');
    const isFavourite = localStorage.getItem(playlistName) === 'true';
    icon.className = isFavourite ? favouriteStyle : notFavouriteStyle;
  });
});
