window.weatherApp.components.createCardsItem = (cities) => {
    return `
    <div class="column is-1">
      <section class="card has-text-centered">
        <header class="card-header">
          <p class="card-header-title is-size-4 is-centered">
            ${cities.name}
          </p>
        </header>
        <div class="card-image">
          <figure class="image">
            <img src="${cities.imageUrl}" alt="Image">
          </figure>
        </div>
        <article class="card-content">
          <p class="content is-size-4">
            ${cities.description}
          </p>
        </article>
        <footer class="card-footer">
          <button class="card-footer-item button has-background-grey-lighter">Play</button>
          <button class="card-footer-item button has-background-grey-lighter">Open</button>
          <button class="card-footer-item button has-background-grey-lighter">Remove</button>
        </footer>
      </section>
    </div>`
}