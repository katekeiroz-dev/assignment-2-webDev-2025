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
          <p class="content is-size-5">
            ${cities.description}
          </p>
        </article>
        <footer class="card-footer has-background-black">
        <br><br>
         <p class="card-footer-item has-text-white">
         <i class="fa-solid fa-minus"></i>  Min sdsdsdsdsdsds0.9 °C</p>
            <br>
                <p class="card-footer-item has-text-white"><i class="fa-solid fa-plus"></i>  Max 8 °C</p>
                <br><br>
                
        </footer>
        <a href="/cities/?name=${cities.name}" class="has-text-black"> Dashboard </a>
      </section>
    </div>`
}