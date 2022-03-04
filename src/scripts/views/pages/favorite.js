import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Favorite = {
  async render() {
    return `
      <div id="explore">
        <h1 style="text-align:center">Restaurant Favorite mu</h1>
        <div class="container" id="restaurant-content"></div>
      </div>
    `;
  },

  async afterRender() {
    const listRestaurant = document.querySelector('#restaurant-content');
    listRestaurant.innerHTML = '';

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    restaurants.forEach((restaurant) => {
      const restaurantBox = document.createElement('div');
      restaurantBox.innerHTML = `<img class="images" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" alt='Gambar Restaurant ${restaurant.name}'>
      <a href="/#/detail/${restaurant.id}"><h2 class="text-center">${restaurant.name}</h2></a>
      <h4 class="text-center">Lokasi : ${restaurant.city}</h4>
      <h4 class="text-center">Rating : ${restaurant.rating}/5</h4>
      <p>${restaurant.description}</p>`;

      listRestaurant.appendChild(restaurantBox);
    });
  },
};

export default Favorite;
