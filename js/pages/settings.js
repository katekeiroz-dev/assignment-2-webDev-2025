 // generate the cards of the favorite cities

 PREFERENCESSSSSSSSSS
      document.addEventListener('DOMContentLoaded', () => {
      const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
      const container = document.getElementById('cityCardsContainer');

      if (favoriteCities.length > 0) {
        favoriteCities.forEach(city => {
          const cityKey = city.toLowerCase();
          const daily = weatherData[cityKey + '_daily']?.daily;

          let tempMax = 'N/A';
          let tempMin = 'N/A';

          if (daily) {
            tempMax = daily.temperature_2m_max[0];
            tempMin = daily.temperature_2m_min[0];
          }

          const cityCard = document.createElement('div');
          cityCard.classList.add('column', 'is-one-third');
          cityCard.innerHTML = `
          <div class="card" data-city="${city}" onclick="window.location.href='/cityfocus/?city=${city}';">
  <header class="card-header">
      <p class="card-header-title is-flex is-justify-content-center"">
        ${city}
      </p>
    </header>

    <article class="card-content">
      <div class="columns is-mobile is-centered has-text-centered">
        <div class="column">
          <p class="is-size-4">${tempMin}°C</p>
          <p class="is-size-7 has-text-grey">Min</p>
        </div>
        <div class="column">
          <p class="is-size-4">${tempMax}°C</p>
          <p class="is-size-7 has-text-grey">Max</p>
        </div>
      </div>
    </article>

    <footer class="card-footer">
      <a class="card-footer-item">More Info</a>
    </footer>
  </section>
        `;
          container.appendChild(cityCard);
        });
      } else {
        container.innerHTML = '<p class="has-text-centered">No favorite cities selected. Go to Preferences to select some cities.</p>';
      }
    });


    function updateClock() {
      const now = dayjs();
      const formatted = now.format("dddd, D MMMM YYYY - HH:mm");
      document.getElementById("clock").textContent = formatted;
    }

    document.addEventListener("DOMContentLoaded", () => {
      updateClock(); // mostra imediatamente
      setInterval(updateClock, 60000); // atualiza a cada 60 segundos
    });