const Favorite = {
  async render() {
    return `
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
          restaurantBox.innerHTML = `<img class="images" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" alt='Gambar Restaurant ${restaurant.name}'>`;
          restaurantBox.innerHTML += `<h2 class="text-center">${restaurant.name}</h2>`;
          restaurantBox.innerHTML += `<h4 class="text-center">Lokasi : ${restaurant.city}</h4>`;
          restaurantBox.innerHTML += `<h4 class="text-center">Rating : ${restaurant.rating}/5</h4>`;
          restaurantBox.innerHTML += `<p>${restaurant.description}</p>`;

          listRestaurant.appendChild(restaurantBox);
        });
      }).catch(() => {
        alert('Koneksi jaringan tidak stabil untuk menampilkan data restaurant');
      });
  },
};

export default Favorite;
