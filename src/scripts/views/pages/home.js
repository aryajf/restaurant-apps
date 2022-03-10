const Home = {
  async render() {
    return `
      <picture>
        <source media="(max-width: 768px)" srcset="./images/hero-image_1-small.jpg">
        <img id="hero-element" src='./images/hero-image_1-large.jpg' alt="Gambar Utama"></img>
      </picture>
      <h1 id="explore-title">Explore Restaurant</h1>
      <div id="explore">
          <div class="container" id="restaurant-content"></div>
      </div>
      `;
  },

  async afterRender() {
    const listRestaurant = document.querySelector('#restaurant-content');
    listRestaurant.innerHTML = '';

    fetch('https://restaurant-api.dicoding.dev/list').then((response) => response.json())
      .then((restaurantData) => {
        restaurantData.restaurants.forEach((restaurant) => {
          const restaurantBox = document.createElement('div');
          restaurantBox.innerHTML = `<img class="images lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" alt='Gambar Restaurant ${restaurant.name}'>
          <a href="/#/detail/${restaurant.id}"><h2 class="text-center">${restaurant.name}</h2></a>
          <h4 class="text-center">Lokasi : ${restaurant.city}</h4>
          <h4 class="text-center">Rating : ${restaurant.rating}/5</h4>
          <p>${restaurant.description}</p>
        `;

          listRestaurant.appendChild(restaurantBox);
        });
      }).catch(() => {
        alert('Koneksi jaringan tidak stabil untuk menampilkan data restaurant');
      });
  },
};

export default Home;
