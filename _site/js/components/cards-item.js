window.weatherApp.components.createCardsItem = (cities) => {
    return `
    <div class="column  is-2">
      <section class="card has-text-centered">
        <header class="card-header">
          <p class="card-header-title is-size-4 is-centered">
            ${cities.name}
          </p>
          <button class="card-header-icon">
          <span class="icon">
            <i id="fave-${cities.name}" class="fa-regular fa-heart"></i>
          </span>
        </button>
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
         
         <i class="fa-solid fa-minus"></i>  Min 0.9 °C</p>
            <br>
                <p class="card-footer-item has-text-white"><i class="fa-solid fa-plus"></i>  Max 8 °C</p>
                <br><br>
                
        </footer>
        <div class="has-background-black mt-1 is-3 has-border">
        <a href="/cities/?name=${cities.name}" class="has-text-white pt-5 is-size-5 "> Check out more </a>
        </div>
      </section>
    </div>
   `
    
}